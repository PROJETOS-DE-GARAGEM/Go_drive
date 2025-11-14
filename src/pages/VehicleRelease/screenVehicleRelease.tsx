import { useState, useMemo } from "react";
import { View, Text } from "react-native";
import Button from "../../components/Button/Button";
import { Header } from "../../components/Header";
import styles from "./styles";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { useNavigation } from "@react-navigation/native";

export const VehicleRelease = () => {
  const [showToken, setShowToken] = useState(false);
  const navigation = useNavigation();

  const codigo = useMemo(() => {
    return Array.from({ length: 4 }, () => Math.floor(Math.random() * 9)).join(
      ""
    );
  }, []);

  return (
    <View style={{ flex: 1, backgroundColor: "#fff", alignItems: "center" }}>
      <Header
        title="Token de acesso"
        onBackPress={() => navigation.navigate("AppStack", { screen: "Home" })}
      />

      <View
        style={{
          flex: 1,
          padding: 20,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <MaterialCommunityIcons
          name="shield-lock"
          size={170}
          color="#1f51d8"
          style={{ marginBottom: 70 }}
        />

        <View
          style={{
            backgroundColor: "#F3F5F7",
            borderRadius: 8,
            marginBottom: 20,
            height: 200,
            justifyContent: "center", // centraliza verticalmente
            alignItems: "center",
          }}
        >
          <Text
            style={{
              fontSize: 20,
              padding: 10,
              textAlign: "center",
            }}
          >
            Token de acesso de uso exclusivo, informe em um de nossos
            estacionamentos credenciados para retirar o veiculo.
          </Text>
        </View>

        {showToken && (
          <View style={{ marginTop: 20 }}>
            <Text
              style={{ fontSize: 20, fontWeight: "bold", marginBottom: 12 }}
            >
              Token de acesso:
            </Text>
            <View style={{ flexDirection: "row", justifyContent: "center" }}>
              {codigo.split("").map((digito, index) => (
                <View
                  key={index}
                  style={{
                    margin: 8,
                    padding: 16,
                    backgroundColor: "#eee",
                    borderRadius: 8,
                  }}
                >
                  <Text style={{ fontSize: 32 }}>{digito}</Text>
                </View>
              ))}
            </View>
          </View>
        )}
        <Button
          style={{ marginTop: 30 }}
          onPress={() => setShowToken(true)}
          name="Liberar"
        />
      </View>
    </View>
  );
};
