import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { AuthStackParamList } from "../types/navigation";
import Welcome from "../pages/Welcome/Welcome";
import Register from "../pages/Register/Register";
import Login from "../pages/Login";

const Stack = createNativeStackNavigator<AuthStackParamList>();

export default function AuthStack() {
  return (
    <Stack.Navigator
      initialRouteName="Welcome"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Welcome" component={Welcome} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
    </Stack.Navigator>
  );
}
