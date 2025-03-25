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

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        barStyle="light-content"
        translucent={true}
        backgroundColor={"#1F51D8"}
      />
      {/* <Welcome /> */}
      <Login />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
