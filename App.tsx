import { StyleSheet, View } from "react-native";
import BgGradient from "./src/components/BgGradient/BgGradientStyle";
import Welcome from "./src/pages/Welcome/Welcome";

export default function App() {
  return (
    <View style={styles.container}>
      <Welcome />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
