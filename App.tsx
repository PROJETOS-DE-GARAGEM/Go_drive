import { StyleSheet, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { CustomStatusBar } from "./src/components/CustomStatusbar";
import { NavigationContainer } from "@react-navigation/native";
import RootStack from "./src/routes/RootStack";
import { AuthProvider } from "./src/contexts/AuthContext";

export default function App() {
  return (
    <SafeAreaProvider>
      <CustomStatusBar backgroundColor="#1f51d8" barStyle="light-content" />
      <NavigationContainer>
        <AuthProvider>
          <RootStack />
        </AuthProvider>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
