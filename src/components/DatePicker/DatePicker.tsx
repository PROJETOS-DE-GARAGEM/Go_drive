import { useEffect, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  ViewStyle,
  Appearance,
} from "react-native";
import DatePickerModal from "react-native-modal-datetime-picker";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { format } from "date-fns";
import styles from "./DatePickerStyle";

type DatePickerProps = {
  onChange: (date: Date) => void;
  icon?: string;
  placeholder?: string;
  value?: Date;
  error?: string;
  style?: ViewStyle;
  disabled?: boolean;
};

export default function DatePicker({
  onChange,
  icon,
  placeholder,
  value,
  error,
  style,
  disabled,
}: DatePickerProps) {
  const [show, setShow] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Date | null>(value ?? null);

  const colorScheme = Appearance.getColorScheme() === "dark" ? "dark" : "light";
  // ...existing code...
  useEffect(() => {
    setSelectedDate(value ?? null);
  }, [value]);

  const handleConfirm = (date: Date) => {
    setShow(false);
    setSelectedDate(date);
    onChange(date);
  };

  const handleCancel = () => {
    setShow(false);
  };

  return (
    <View style={style}>
      <View style={styles.containerInput}>
        <TextInput
          onPress={() => !disabled && setShow(true)}
          style={[
            styles.inputText,
            error && { borderColor: "red", borderWidth: 2 },
            disabled && { backgroundColor: "#f0f0f0" }, // cor diferente se desabilitado
          ]}
          placeholder={placeholder}
          placeholderTextColor={"#C7C7CD"}
          value={selectedDate ? format(selectedDate, "dd/MM/yyyy") : ""}
          editable={false}
        />
        <TouchableOpacity
          onPress={() => !disabled && setShow(true)}
          style={styles.buttonIconPicker}
          disabled={disabled}
        >
          <View>
            <FontAwesome
              style={styles.iconCalendar}
              name="calendar"
              size={20}
              color={"gray"}
            />
          </View>
        </TouchableOpacity>
      </View>

      <DatePickerModal
        isVisible={show} // Controla a visibilidade do modal
        mode="date" // Define o modo (date, time ou datetime)
        onConfirm={handleConfirm} // Chamado ao confirmar a data
        onCancel={handleCancel} // Chamado ao cancelar
        themeVariant={colorScheme}
      />
    </View>
  );
}
