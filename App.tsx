import {
  StyleSheet,
  View,
} from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Welcome from "./src/pages/Welcome/Welcome";
import Login from "./src/pages/Register/Register";
import { CustomStatusBar } from "./src/components/CustomStatusbar";

export default function App() {
  return (
    <SafeAreaProvider>
      <CustomStatusBar backgroundColor="#1f51d8" barStyle="light-content" />
      <View style={styles.container}>
        {/* <Welcome/> */}
        <Login/>
      </View>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
