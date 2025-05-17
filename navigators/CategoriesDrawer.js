import React from "react";
import {StyleSheet, Text, View} from "react-native";
import {createDrawerNavigator} from "@react-navigation/drawer";
import {Ionicons} from "@expo/vector-icons";

const Drawer = createDrawerNavigator();

import CategoriesScreen from "../screens/CategoriesScreen";
import FavoritesScreen from "../screens/FavoritesScreen";

const CategoriesDrawer = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "#351401",
        },
        headerTintColor: "#fff",
        drawerContentStyle: {
          backgroundColor: "#3f2f25",
        },
        drawerInactiveTintColor: "#fff",
        drawerActiveTintColor: "#351401",
        drawerActiveBackgroundColor: "#e4baa1",
      }}
    >
      <Drawer.Screen
        name="Categories"
        component={CategoriesScreen}
        options={{
          title: "All Categories",
          drawerIcon: ({color, size}) => (
            <Ionicons
              name="list"
              size={size}
              color={color}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Favorites"
        component={FavoritesScreen}
        options={{
          title: "My Favorites",
          drawerIcon: ({color, size}) => (
            <Ionicons
              name="star"
              size={size}
              color={color}
            />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};

export default CategoriesDrawer;
