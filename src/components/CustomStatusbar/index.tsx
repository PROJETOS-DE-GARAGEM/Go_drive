import { View, StatusBar, StatusBarStyle } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

type StatusbarProps = {
  backgroundColor: string;
  barStyle: StatusBarStyle;
};

const CustomStatusBar = ({ backgroundColor, barStyle }: StatusbarProps) => {
  const insets = useSafeAreaInsets();

  return (
    <View style={{ height: insets.top, backgroundColor }}>
      <StatusBar backgroundColor={backgroundColor} barStyle={barStyle} />
    </View>
  );
};

export { CustomStatusBar };
