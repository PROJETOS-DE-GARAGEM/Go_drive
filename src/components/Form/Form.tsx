import { Controller, useFormContext } from "react-hook-form";
import { Text, TextInput, View } from "react-native";
import styles from "./FormStyle";

//Interface que será utilizada no form
interface FormProps {
  title: string;
  fields: { name: string; placeholder: string }[];
}

const Form: React.FC<FormProps> = ({ title, fields }) => {
  const { control } = useFormContext();
  return (
    <View style={styles.formContainer}>
      <View style={styles.titleContainer}>
        <Text style={styles.formTitle}>{title}</Text>
      </View>

      {fields.map((field) => (
        <Controller
          key={field.name}
          control={control}
          name={field.name}
          render={({
            field: { onChange, onBlur, value },
            fieldState: { error },
          }) => (
            <View>
              <TextInput
                style={styles.input}
                placeholder={field.placeholder}
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
              />
              {error && <Text style={{ color: "red" }}>{error.message}</Text>}
            </View>
          )}
        />
      ))}
    </View>
  );
};

export default Form;
