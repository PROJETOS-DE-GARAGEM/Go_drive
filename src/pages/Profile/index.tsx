import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, Button, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './style';
import { Ionicons } from '@expo/vector-icons';
import { Header } from '../../components/Header';
import { useForm, FormProvider } from 'react-hook-form';
import Form from '../../components/Form/Form';

const ProfileScreen = () => {
  const navigation = useNavigation();

  const methods = useForm({
  defaultValues: {
    firstName: 'Ernando',
    lastName: 'Tomé',
    email: 'ernando@gmail.com',
  },
});

const onSubmit = (data: any) => {
  console.log("Dados atualizados:", data);
};

  return (
    <SafeAreaView>
      <FormProvider {...methods}>
        <Header title="Profile"/>

      <View style={styles.profileSection}>
        <View style={styles.avatarContainer}>
          <Image source={require('../../../assets/avatar.png')} style={styles.avatar} />
          <TouchableOpacity style={styles.editAvatarIcon}>
            <Ionicons name="create-outline" size={28} color="black" />
          </TouchableOpacity>
        </View>
        <Text style={styles.profileName}>{`${methods.getValues("firstName")} ${methods.getValues("lastName")}`}</Text>
      </View>

        <Form
        title="Editar perfil"
        fields={[
          { name: 'firstName', placeholder: 'Primeiro Nome', rules: { required: 'Obrigatório' } },
          { name: 'lastName', placeholder: 'Sobrenome', rules: { required: 'Obrigatório' } },
          { name: 'email', placeholder: 'Email', rules: { required: 'Obrigatório' } },
        ]}
        />

      <TouchableOpacity style={styles.saveButton} onPress={methods.handleSubmit(onSubmit)}>
        <Text style={styles.saveButtonText}>Salvar</Text>
      </TouchableOpacity>
      </FormProvider>
    </SafeAreaView>
  );
};

export default ProfileScreen;
