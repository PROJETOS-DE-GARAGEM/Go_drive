import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RootStackParamList } from "../types/navigation";

import AuthStack from "./AuthStack";

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function RootStack(){
    return(
        <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName="AuthStack">
            <Stack.Screen name="AuthStack" component={AuthStack}/>
        </Stack.Navigator>
    )
}