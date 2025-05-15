import { signOut, createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { auth, db } from "../services/firabaseConnection";

export const register = async (formData: {
  fullName: string;
  CPF: string;
  phoneNumber: string;
  street: string;
  neighborhood: string;
  number: string;
  city: string;
  cep: string;
  registerNumber: string;
  emissionDate: Date;
  validDate: Date;
  email: string;
  password: string;
  confirmPassword: string;
}) => {
  try {
    //Cria um usuario no Firebase Auth
    // Garante que ninguém está autenticado
    console.log("Usuário atual antes do cadastro:", auth.currentUser);
    await signOut(auth);
    console.log("Usuário após signOut:", auth.currentUser);

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
      dataDeEmissao: formData.emissionDate,
      dataDeValidade: formData.validDate,
      email: formData.email,
      criadoEm: new Date(),
    });

    console.log("Usuário registrado com sucesso!");

    return user;
  } catch (error: any) {
    console.log("Erro ao registrar:", error.message);
    throw error;
  }
};
