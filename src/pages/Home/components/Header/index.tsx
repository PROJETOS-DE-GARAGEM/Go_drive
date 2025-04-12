import { View, Text, Image } from "react-native";

import styles from "./style";

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
        <Text style={styles.titleHeader}>Go Drive</Text>
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
