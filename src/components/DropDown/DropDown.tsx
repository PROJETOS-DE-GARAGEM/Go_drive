import { useState } from "react";
import { View, Text, TouchableOpacity, FlatList, Modal } from "react-native";
import styles from "./DropDownStyle";

type Option = {
  label: string;
  value: string;
};

type Props = {
  label?: string;
  value: string;
  onChange: (value: string) => void;
  options: Option[];
};

export default function DropDown({ label, value, onChange, options }: Props) {
  const [modalVisible, setModalVisible] = useState(false);
  const selectedLabel =
    options.find((opt) => opt.value === value)?.label || "Cat.";

  return (
    <View style={styles.container}>
      {label && <Text style={styles.label}>{label}</Text>}

      <TouchableOpacity
        style={styles.dropdown}
        onPress={() => setModalVisible(true)}
      >
        <Text
          style={[
            selectedLabel === "Cat." && styles.unselectedText,
            selectedLabel !== "Cat." && styles.selectedOptionText,
          ]}
        >
          {selectedLabel}
        </Text>
      </TouchableOpacity>

      <Modal visible={modalVisible} transparent animationType="slide">
        <TouchableOpacity
          style={styles.overlay}
          onPress={() => setModalVisible(false)}
        >
          <View style={styles.modalContent}>
            <FlatList
              data={options}
              keyExtractor={(item) => item.value}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={styles.option}
                  onPress={() => {
                    onChange(item.value);
                    setModalVisible(false);
                  }}
                >
                  <Text>{item.label}</Text>
                </TouchableOpacity>
              )}
            />
          </View>
        </TouchableOpacity>
      </Modal>
    </View>
  );
}
