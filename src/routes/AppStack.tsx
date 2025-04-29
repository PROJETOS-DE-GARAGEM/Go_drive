import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { AppStackParamsList } from "../types/navigation";

import Home from "../pages/Home";
import FeedCars from "../pages/FeedCars";

const Stack = createNativeStackNavigator<AppStackParamsList>();

export default function AppStack() {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen
        name="FeedCars"
        component={FeedCars}
        options={{
          headerBackVisible: false,
          headerTitleAlign: "center",
          animation: "slide_from_right",
          gestureEnabled: true,
          gestureDirection: "horizontal",
          keyboardHandlingEnabled: true,
        }}
      />
    </Stack.Navigator>
  );
}
