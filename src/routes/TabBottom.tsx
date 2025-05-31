import { Platform, View, StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { Entypo, FontAwesome6, FontAwesome5 } from "@expo/vector-icons";

import Home from "../pages/Home";
import FeedCars from "../pages/FeedCars";
import Maps from "../pages/Maps";
import Profile from "../pages/Profile";

const Tab = createBottomTabNavigator();

export default function TabRoutes() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: styles.tabBar,
        tabBarShowLabel: false,
        tabBarHideOnKeyboard: true,
        tabBarActiveTintColor: "#1f51d8",
        animation: "fade",
      }}
    >
      <Tab.Screen
        name="HomeStack"
        component={Profile}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size, focused }) => {
            return focused ? (
              <View style={[styles.iconContainer, { backgroundColor: "#FFF" }]}>
                <Entypo name="home" color={color} size={size} />
              </View>
            ) : (
              <View
                style={[styles.iconContainer, { backgroundColor: "#1f51d8" }]}
              >
                <Entypo name="home" color={color} size={size} />
              </View>
            );
          },
        }}
      />

      <Tab.Screen
        name="Feed"
        component={FeedCars}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size, focused }) => {
            return focused ? (
              <View style={[styles.iconContainer, { backgroundColor: "#FFF" }]}>
                <FontAwesome5 name="search" color={color} size={size} />
              </View>
            ) : (
              <View
                style={[styles.iconContainer, { backgroundColor: "#1f51d8" }]}
              >
                <FontAwesome5 name="search" color={color} size={size} />
              </View>
            );
          },
        }}
      />

      <Tab.Screen
        name="Maps"
        component={Maps}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size, focused }) => {
            return focused ? (
              <View style={[styles.iconContainer, { backgroundColor: "#FFF" }]}>
                <FontAwesome6 name="location-dot" color={color} size={size} />
              </View>
            ) : (
              <View
                style={[styles.iconContainer, { backgroundColor: "#1f51d8" }]}
              >
                <FontAwesome6 name="location-dot" color={color} size={size} />
              </View>
            );
          },
        }}
      />

      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size, focused }) => {
            return focused ? (
              <View style={[styles.iconContainer, { backgroundColor: "#FFF" }]}>
                <FontAwesome6 name="user-large" color={color} size={size} />
              </View>
            ) : (
              <View
                style={[styles.iconContainer, { backgroundColor: "#1f51d8" }]}
              >
                <FontAwesome6 name="user-large" color={color} size={size} />
              </View>
            );
          },
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    marginLeft: "3%",
    marginRight: "3%",
    position: "absolute",
    backgroundColor: "#1f51d8",
    borderTopWidth: 0,
    bottom: Platform.OS === "android" ? "3%" : "7%",
    left: 20,
    right: 20,
    elevation: 5,
    borderRadius: 30,
    height: 70,
    shadowColor: "#000",
    shadowOpacity: 0.3,
    shadowRadius: 5,
    paddingBottom: Platform.OS === "android" ? 10 : 20,
  },
  iconContainer: {
    justifyContent: "center",
    alignItems: "center",
    height: 50,
    width: 50,
    borderRadius: 25,
    position: "absolute",
    top: 4,
  },
});
