import { Controller, RegisterOptions, useFormContext } from "react-hook-form";
import {
  Text,
  TextInput,
  View,
  TouchableOpacity,
  ViewStyle,
} from "react-native";
import styles from "./FormStyle";
import Icon from "react-native-vector-icons/MaterialIcons";
import { useState } from "react";
import { TextInputMask } from "react-native-masked-text";

//Interface que será utilizada no form
interface FormProps {
  title?: string;
  fields: {
    name: string;
    placeholder: string;
    rules?: RegisterOptions;
    style?: ViewStyle;
    keyboardType?: "default" | "email-address" | "numeric" | "phone-pad";
    editable?: boolean;
    onlyNumbers?: boolean;
  }[];
}

const Form: React.FC<FormProps> = ({ title, fields }) => {
  const { control } = useFormContext();
  const [showPassword, setShowPassword] = useState(false);
  return (
    <View style={styles.formContainer}>
      <View style={styles.titleContainer}>
        {title && <Text style={styles.formTitle}>{title}</Text>}
      </View>

      {fields.map((field) => (
        <Controller
          key={field.name}
          control={control}
          name={field.name}
          rules={field.rules}
          render={({
            field: { onChange, onBlur, value },
            fieldState: { error },
          }) => (
            <View>
              {field.name === "CPF" ? (
                <TextInputMask
                  type={"cpf"} // Máscara CPF
                  style={[
                    styles.input,
                    field.style,
                    !field.editable && styles.disabledInput,
                    error && { borderColor: "red" },
                  ]}
                  placeholder={field.placeholder}
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                  keyboardType="numeric"
                  editable={field.editable !== false} // Permite edição apenas se `editable` não for `false`
                />
              ) : field.name === "FullName" ? (
                <TextInput
                  style={[
                    styles.input,
                    field.style,
                    !field.editable && styles.disabledInput, // Aplica o estilo desabilitado
                    error && { borderColor: "red" }, // Estilo de erro
                  ]}
                  placeholder={field.placeholder}
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                  editable={field.editable !== false} // Permite edição apenas se `editable` não for `false`
                />
              ) : field.name === "PhoneNumber" ? (
                <TextInputMask
                  type={"custom"}
                  options={{
                    mask: "(99) 99999-9999", // Máscara de telefone
                  }}
                  style={[
                    styles.input,
                    field.style,
                    error && { borderColor: "red" },
                  ]}
                  placeholder={field.placeholder}
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                  keyboardType="numeric"
                />
              ) : field.name === "Cep" ? (
                <TextInputMask
                  type={"custom"}
                  options={{ mask: "99999-999" }}
                  style={[
                    styles.input,
                    field.style,
                    error && { borderColor: "red" },
                  ]}
                  placeholder={field.placeholder}
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                  keyboardType="numeric"
                />
              ) : (
                <TextInput
                  style={[
                    styles.input,
                    field.style,
                    error && { borderColor: "red" },
                  ]}
                  placeholder={field.placeholder}
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                  secureTextEntry={field.name === "password" && !showPassword}
                />
              )}
              {field.name === "password" && (
                <TouchableOpacity
                  style={{
                    position: "absolute",
                    right: 10,
                    top: 35,
                  }}
                  onPress={() => setShowPassword(!showPassword)}
                >
                  <Icon
                    name={showPassword ? "visibility" : "visibility-off"}
                    size={20}
                    color={"gray"}
                  />
                </TouchableOpacity>
              )}
              {error && (
                <Text
                  style={{
                    color: "red",
                    marginLeft: 8,
                    marginTop: 3,
                  }}
                >
                  {error.message}
                </Text>
              )}
            </View>
          )}
        />
      ))}
    </View>
  );
};

export default Form;
