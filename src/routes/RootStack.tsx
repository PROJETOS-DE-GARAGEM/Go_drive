import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RootStackParamList } from "../types/navigation";

import AuthStack from "./AuthStack";
import AppStack from "./AppStack";

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function RootStack(){
    return(
        <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName="AppStack">
            <Stack.Screen name="AuthStack" component={AuthStack}/>
            <Stack.Screen name="AppStack" component={AppStack}/>
        </Stack.Navigator>
    )
}