import { Controller, useFormContext } from "react-hook-form";
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
    rules?: object;
    style?: ViewStyle;
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
                  style={[styles.input, field.style]}
                  placeholder={field.placeholder}
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                  keyboardType="numeric"
                />
              ) : field.name === "PhoneNumber" ? (
                <TextInputMask
                  type={"custom"}
                  options={{
                    mask: "(99) 99999-9999", // Máscara de telefone
                  }}
                  style={[styles.input, field.style]}
                  placeholder={field.placeholder}
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                  keyboardType="numeric"
                />
              ) : (
                <TextInput
                  style={[styles.input, field.style]}
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
                    top: 14,
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
                    marginBottom: 20,
                    marginTop: -17,
                    marginLeft: 8,
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
