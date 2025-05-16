import { signOut, createUserWithEmailAndPassword } from "firebase/auth";
import {
  doc,
  setDoc,
  collection,
  query,
  where,
  getDocs,
} from "firebase/firestore";
import { auth, db } from "./firabaseConnection";

export type RegisterProps = {
  fullName: string;
  CPF: string;
  phoneNumber: string;
  street: string;
  neighborhood: string;
  number: string;
  city: string;
  cep: string;
  registerNumber: string;
  cnhType: string;
  emissionDate: Date;
  validDate: Date;
  email: string;
  password: string;
  confirmPassword: string;
};

export const register = async (formData: RegisterProps) => {
  try {
    // Garante que ninguém está autenticado
    await signOut(auth);

    //Cria um usuario no Firebase Auth
    const userCredencial = await createUserWithEmailAndPassword(
      auth,
      formData.email,
      formData.password
    );

    const user = userCredencial.user;

    // Salva os dados adicionais no firestone
    await setDoc(doc(db, "usuarios", user.uid), {
      nomeCompleto: formData.fullName,
      CPF: formData.CPF,
      numeroTelefone: formData.phoneNumber,
      rua: formData.street,
      bairro: formData.neighborhood,
      numero: formData.number,
      cidade: formData.city,
      cep: formData.cep,
      numeroRegistro: formData.registerNumber,
      cnhCategory: formData.cnhType,
      dataDeEmissao: formData.emissionDate,
      dataDeValidade: formData.validDate,
      email: formData.email,
    });

    console.log("Usuário registrado com sucesso!");

    return user;
  } catch (error: any) {
    console.log("❌ Erro ao registrar:", error.code, error.message);
    throw error;
  }
};
