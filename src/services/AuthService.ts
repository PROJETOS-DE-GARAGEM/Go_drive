import { signOut, createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { auth, db } from "../services/firabaseConnection";

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
    //Cria um usuario no Firebase Auth
    // Garante que ninguém está autenticado
    console.log("1 - Fazendo signOut...");
    await signOut(auth);

    console.log("2 - Criando usuário com email e senha...");

    const userCredencial = await createUserWithEmailAndPassword(
      auth,
      formData.email,
      formData.password
    );

    console.log("3 - Usuário criado com sucesso.");

    const user = userCredencial.user;

    console.log("Dados para salvar no Firestore:", formData);

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
