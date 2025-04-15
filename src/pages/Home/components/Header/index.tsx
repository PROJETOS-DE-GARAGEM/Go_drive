import { View, Text, Image } from "react-native";

import * as Animatable from "react-native-animatable";

import styles from "./style";

const TextAnimated = Animatable.createAnimatableComponent(Text);

const Header = () => {
  return (
    <View style={styles.headerContainer}>
      <View style={styles.logoContainer}>
        <View style={styles.iconContainer}>
          <Image
            source={require("../../../../../assets/image (5).png")}
            style={styles.imageIcon}
          />
        </View>
        <View>
          <TextAnimated
            style={styles.titleHeader}
            animation="pulse"
            iterationCount={Infinity}
            duration={2000}
          >
            Go Drive
          </TextAnimated>
        </View>
      </View>
      <View>
        <View style={styles.logoContainer}>
          <Image
            source={require("../../../../../assets/avatar.png")}
            style={styles.iconContainer}
          />
        </View>
      </View>
    </View>
  );
};

export { Header };
