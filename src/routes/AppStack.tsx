import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { AppStackParamsList } from "../types/navigation";

import FeedCars from "../pages/FeedCars";
import TabRoutes from "./TabBottom";
import { DetailsCars } from "../pages/DetailsCars/screen";
import PaymentScreen from "../pages/PaymentScreen/PaymentSreen";

const Stack = createNativeStackNavigator<AppStackParamsList>();

export default function AppStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Home" component={TabRoutes} />
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
      <Stack.Screen
        name="DetailsCars"
        component={DetailsCars}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="PaymentScreen"
        component={PaymentScreen}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}
