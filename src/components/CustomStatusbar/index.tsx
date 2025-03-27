import { View, StatusBar } from "react-native";
import {
  SafeAreaView,
  SafeAreaProvider,
  useSafeAreaInsets,
} from "react-native-safe-area-context";

type StatusbarProps = {
    backgroundColor: string

}

 const CustomStatusBar = ({ backgroundColor}: StatusbarProps) => {
  const insets = useSafeAreaInsets();

  return (
    <View style={{ height: insets.top, backgroundColor}}>
      <StatusBar 
        backgroundColor={backgroundColor}
        barStyle="light-content"
    />
    </View>
  );
};

export { CustomStatusBar}
