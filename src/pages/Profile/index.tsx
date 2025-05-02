import React, { useState } from 'react';
import { View, Text, TextInput, Image, TouchableOpacity, Button, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './style';
import { Ionicons } from '@expo/vector-icons';


const ProfileScreen = () => {
  const navigation = useNavigation();
  const [firstName, setFirstName] = useState('Ernando');
  const [lastName, setLastName] = useState('Tomé');
  const [email, setEmail] = useState('ernando@gmail.com');

  const handleSave = () => {

    console.log({ firstName, lastName, email });
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={30} color="black" />
        </TouchableOpacity>
        
        <Text style={styles.title}>Profile</Text>
        
        <TouchableOpacity>
          <Ionicons name="create-outline" size={35} color="black"/>
          <Text style={styles.editText}>Editar</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.divider}/>

      <View style={styles.profileSection}>
        <View style={styles.avatarContainer}>
          <Image source={require('../../../assets/avatar.png')} style={styles.avatar} />
          <TouchableOpacity style={styles.editAvatarIcon}>
            <Ionicons name="create-outline" size={28} color="black" />
          </TouchableOpacity>
        </View>
        <Text style={styles.profileName}>{`${firstName} ${lastName}`}</Text>
      </View>


      <View style={styles.form}>
        <TextInput
          style={styles.input}
          value={firstName}
          onChangeText={setFirstName}
          placeholder="First Name"
        />
        <TextInput
          style={styles.input}
          value={lastName}
          onChangeText={setLastName}
          placeholder="Last Name"
        />
        <TextInput
          style={styles.input}
          value={email}
          onChangeText={setEmail}
          placeholder="Email"
        />
      </View>

      <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
        <Text style={styles.saveButtonText}>Salvar</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default ProfileScreen;
