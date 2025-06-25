import { View, Text, Image } from "react-native";

import styles from "./style";

import Button from "../../../../components/Button/Button";

type AccessDeniedProps = {
  openSettings: () => void;
};

const AccessDeniedLocation = ({
  openSettings,
}: AccessDeniedProps) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require("../../../../../assets/access-location-denied.png")}
      />
      <View style={styles.titleContainer}>
        <Text style={styles.title}>
          Por favor, acesse as configurações do dispositivo,
          habilite a localização e reinicie o aplicativo.
        </Text>
      </View>
      <Button name="Habilite a Localização" onPress={() => openSettings()} />
    </View>
  );
};

export { AccessDeniedLocation };