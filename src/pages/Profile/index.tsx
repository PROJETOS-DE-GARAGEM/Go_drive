import React, { useEffect } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  TextInput,
  Alert,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './style';
import { Header } from '../../components/Header';
import { useForm, Controller } from 'react-hook-form';
import { useAuth } from '../../hooks/useAuth';
import { getMe } from '../../services/AuthService';
import { changeProfile } from "../../services/profileService";

interface ProfileFormData {
  firstName: string;
  lastName: string;
  email: string;
}

const ProfileScreen = () => {
  const navigation = useNavigation();
  const { user } = useAuth();

  const { control, handleSubmit, watch, reset } = useForm<ProfileFormData>({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
    },
  });

  const firstName = watch('firstName');
  const lastName = watch('lastName');

  const onSubmit = async (data: ProfileFormData) => {
    try {
      if (user) {
        await changeProfile(user.uid, data);
        Alert.alert('Sucesso', 'Perfil atualizado com sucesso!');
      }
    } catch (error) {
      console.error(error);
      Alert.alert('Erro', 'Erro ao alterar informações!');
    }
  };

  useEffect(() => {
    async function loadingMe() {
      if (user) {
        const response = await getMe(user.uid);
        if (response) {
          // Suporta nomes compostos
          const [firstName, ...rest] = response.nomeCompleto.split(" ");
          const lastName = rest.join(" ");
          reset({
            firstName,
            lastName,
            email: response.email,
          });
        }
      }
    }
    loadingMe();
  }, []);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Header title="Profile" />
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : undefined}
        style={{ flex: 1 }}
      >
        <View style={styles.profileSection}>
          <Text style={styles.profileName}>{`${firstName} ${lastName}`}</Text>
        </View>

        <View style={{ flex: 1, justifyContent: 'space-between', marginBottom: 124 }}>
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
                  placeholderTextColor="#C7C7CD"
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
                  placeholderTextColor="#C7C7CD"
                  onBlur={onBlur}
                  onChangeText={onChange}
                  maxLength={40}
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
                  placeholderTextColor="#C7C7CD"
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                  keyboardType="email-address"
                  autoCapitalize="none"
                  editable={false}
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