import React, { useEffect, useState } from 'react';
import { 
  View, 
  Text, 
  Image, 
  TouchableOpacity, 
  SafeAreaView, 
  TextInput, 
  Alert, 
  KeyboardAvoidingView, 
  Platform, 
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './style';
import { Ionicons } from '@expo/vector-icons';
import { Header } from '../../components/Header';
import { useForm, Controller } from 'react-hook-form';
import * as ImagePicker from 'expo-image-picker';
import { useAuth } from '../../hooks/useAuth';
import { getMe } from '../../services/AuthService';
import { changeProfile } from '../../services/profileService';

interface ProfileFormData {
  firstName: string;
  lastName: string;
  email: string;
}

const ProfileScreen = () => {
  const navigation = useNavigation();
  const { user }= useAuth();

  const { control, handleSubmit, watch, formState, reset } = useForm<ProfileFormData>({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
    },
  });

  const firstName = watch('firstName');
  const lastName = watch('lastName');

  const [avatarUri, setAvatarUri] = useState<string | null>(null);

  const pickImage = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== 'granted') {
      Alert.alert('Permissão negada', 'É necessário permitir o acesso à galeria.');
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.canceled) {
      setAvatarUri(result.assets[0].uri);
    }
  };

  const onSubmit = async (data: ProfileFormData) => {
    try {
      if(user){
        await changeProfile(user?.uid, data)
        console.log("Dados atualizados:", data);
        Alert.alert('Sucesso', 'Perfil atualizado com sucesso!');
      }
    } catch (error) {
      console.error(error)
      Alert.alert('Erro ao alterar informações!');
    }
  };

  useEffect(()=>{
    async function loadingMe(){
      if(user) {
        const response = await getMe(user.uid)
        if(response){
          const [firstName, lastName] = response.nomeCompleto.split(" ");
          reset({
            firstName,
            lastName,
            email: response.email
          })
        }
      }
    }
    loadingMe()
  },[])

  return (
    <SafeAreaView style={{ flex: 1, }}>
      <Header title="Profile" />

      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : undefined}
        style={{ flex: 1 }}
      >
          <View style={styles.profileSection}>
            <View>
              <Image
                source={avatarUri ? { uri: avatarUri } : require('../../../assets/avatar.png')}
                style={styles.avatar}
              />
              <TouchableOpacity style={styles.editAvatarIcon} onPress={pickImage}>
                <Ionicons name="create-outline" size={20} color="black" />
              </TouchableOpacity>
            </View>
            <Text style={styles.profileName}>{`${firstName} ${lastName}`}</Text>
          </View>

        <View style={{flex: 1, justifyContent: 'space-between', marginBottom: 124 }}>
          <View style={styles.formContainer}>
            <Text style={styles.inputLabel}>Primeiro Nome</Text>
            <Controller
              control={control}
              name="firstName"
              rules={{ required: 'Obrigatório' }}
              render={({ field: { onChange, onBlur, value } }) => (
                <TextInput
                  style={styles.input}
                  placeholder="Primeiro Nome"
                  onBlur={onBlur}
                  onChangeText={onChange}
                  maxLength={20}
                  value={value}
                />
              )}
            />

            <Text style={styles.inputLabel}>Sobrenome</Text>
            <Controller
              control={control}
              name="lastName"
              rules={{ required: 'Obrigatório' }}
              render={({ field: { onChange, onBlur, value } }) => (
                <TextInput
                  style={styles.input}
                  placeholder="Sobrenome"
                  onBlur={onBlur}
                  onChangeText={onChange}
                  maxLength={20}
                  value={value}
                />
              )}
            />

            <Text style={styles.inputLabel}>Email</Text>
            <Controller
              control={control}
              name="email"
              rules={{ required: 'Obrigatório' }}
              render={({ field: { onChange, onBlur, value } }) => (
                <TextInput
                  style={styles.input}
                  placeholder="Email"
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                  keyboardType="email-address"
                />
              )}
            />
          </View>

          <TouchableOpacity style={styles.saveButton} onPress={handleSubmit(onSubmit)}>
            <Text style={styles.saveButtonText}>Salvar</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default ProfileScreen;
