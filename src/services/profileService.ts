import { doc, updateDoc } from "firebase/firestore";
import { db } from "./firabaseConnection";

interface payloadProps {
    firstName: string,
    lastName: string,
    email: string,
}

export const changeProfile = async (id: string, payload: payloadProps ) => {
  const docRef = doc(db, "usuarios", id);
  await updateDoc(docRef, {
    nomeCompleto: `${payload.firstName} ${payload.lastName}`,
    email: payload.email,
  });
};