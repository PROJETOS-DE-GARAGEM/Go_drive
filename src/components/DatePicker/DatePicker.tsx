import { useState } from "react";
import { View, Button, Text, Platform } from "react-native";
import DateTimePicker, {
  DateTimePickerEvent,
} from "@react-native-community/datetimepicker";

type DatePickerProps = {
  onChange: (date: Date) => void;
  icon: string;
};

export default function DatePicker({ label, date, onChange, mode = 'date' }: DatePickerProps) {
  const [show, setShow] = useState(false);

  const handleChange = (event: DateTimePickerEvent, selectedDate?: Date) => {
    if (event.type === "set" && selectedDate) {
      onChange(selectedDate);
    }
    setShow(false);
  };

  return (
    <View style={{ marginVertical: 10 }}>
      {label && <Text style={{ marginBottom: 5 }}>{label}</Text>}

      <Button title="Selecionar data" onPress={() => setShow(true)} />

      <Text style={{ marginTop: 5 }}>{date.toLocaleDateString()}</Text>

      {show && (
        <DateTimePicker
          value={date}
          mode={mode}
          display={Platform.OS === "ios" ? "spinner" : "default"}
          onChange={handleChange}
        />
      )}
    </View>
  );
}
