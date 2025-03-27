import {
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  View,
} from "react-native";
import BgGradient from "./src/components/BgGradient/BgGradientStyle";
import Welcome from "./src/pages/Welcome/Welcome";
import Login from "./src/pages/Register/Register";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { CustomStatusBar } from "./src/components/CustomStatusbar";

export default function App() {
  return (
    <SafeAreaProvider>
      <CustomStatusBar backgroundColor="#1f51d8" barStyle="ligth-content" />
      <View style={styles.container}>
        <Login />
      </View>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
