import {
  StyleSheet,
  View,
} from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { CustomStatusBar } from "./src/components/CustomStatusbar";
import Welcome from "./src/pages/Welcome/Welcome";
import Register from "./src/pages/Register/Register";
import Login from "./src/pages/Login/";
import Home from './src/pages/Home';

export default function App() {
  return (
    <SafeAreaProvider>
      <CustomStatusBar backgroundColor="#1f51d8" barStyle="light-content" />
      <View style={styles.container}>
        <Home/>
      </View>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
