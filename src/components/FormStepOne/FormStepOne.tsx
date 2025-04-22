import { View } from "react-native";
import Form from "../Form/Form";
import styles from "./FormStepOneStyle";

export default function FrmStepOne() {
  return (
    <View style={styles.container}>
      <Form
        title="Informações Pessoais"
        fields={[
          { name: "FullName", placeholder: "Nome completo" },
          { name: "CPF", placeholder: "CPF" },
          { name: "PhoneNumber", placeholder: "Telefone" },
        ]}
        
      />
      <Form
        title="Endereço"
        fields={[{ name: "Street", placeholder: "Rua" }]}
      />
      <View style={styles.row}>
        <Form
          fields={[
            { name: "Neiborhood", placeholder: "Bairro", },
            { name: "City", placeholder: "Cidade" },
          ]}
        />
      </View>
    </View>
  );
}
