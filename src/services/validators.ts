import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "./firabaseConnection";


/**
 * Valida se um valor é único em um campo específico de uma coleção do Firestore.
 * @param collectionName Nome da coleção (ex: "usuarios")
 * @param fieldName Nome do campo (ex: "CPF")
 * @param value Valor a ser verificado
 * @param errorMessage Mensagem de erro personalizada
 * @returns true se for único, ou a mensagem de erro se já existir
 */
export async function validateUniqueField(
  collectionName: string,
  fieldName: string,
  value: string,
  errorMessage: string
) {
  const queryRef = query(collection(db, collectionName), where(fieldName, "==", value));
  const snapshot = await getDocs(queryRef);
  if (!snapshot.empty) {
    return errorMessage;
  }
  return true;
}