import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { auth, db } from "../services/firabaseConnection";

export const register = async (formData: {
  FullName: string;
  CPF: string;
  PhoneNumber: string;
  Street: string;
  Neighborhood: string;
  Number: string;
  City: string;
  cep: string;
  RegisterNumber: string;
  EmissionDate: Date;
  ValidDate: Date;
  Email: string;
  Password: string;
  ConfirmPassword: string;
}) => {
  try {
    //Cria um usuario no Firebase Auth
    const userCredencial = await createUserWithEmailAndPassword(
      auth,
      formData.Email,
      formData.Password
    );

    const user = userCredencial.user;

    // Salva os dados adicionais no firestone
    await setDoc(doc(db, "usuarios", user.uid), {
      nomeCompleto: formData.FullName,
      CPF: formData.CPF,
      numeroTelefone: formData.PhoneNumber,
      rua: formData.Street,
      bairro: formData.Neighborhood,
      numero: formData.Number,
      cidade: formData.City,
      cep: formData.cep,
      numeroRegistro: formData.RegisterNumber,
      dataDeEmissao: formData.EmissionDate,
      dataDeValidade: formData.ValidDate,
      email: formData.Email,
      criadoEm: new Date(),
    });

    console.log("Usuário registrado com sucesso!");

    return user;
  } catch (error: any) {
    console.log("Erro ao registrar:", error.message);
    throw error;
  }
};
