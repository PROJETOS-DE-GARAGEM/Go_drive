import { SafeAreaView, StyleSheet, View } from "react-native";
import BgGradient from "./src/components/BgGradient/BgGradientStyle";
import Welcome from "./src/pages/Welcome/Welcome";
import Login from "./src/pages/Register/Register";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      {/* <Welcome /> */}
      
      
      <Login/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
