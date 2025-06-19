import "react-native-reanimated";
import "react-native-gesture-handler";

import { SafeAreaProvider } from "react-native-safe-area-context";
import { CustomStatusBar } from "./src/components/CustomStatusbar";
import { NavigationContainer } from "@react-navigation/native";
import { linking } from "./src/routes/Linking";
import { AppProvider } from "./src/contexts/RootProvider";

import AuthRoutes from "./src/routes/AuthRoutes";

export default function App() {
  return (
    <SafeAreaProvider>
      <CustomStatusBar backgroundColor="#1f51d8" barStyle="light-content" />
      <NavigationContainer>
        <AppProvider>
          <AuthRoutes />
        </AppProvider>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
