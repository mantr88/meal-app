import {StatusBar as ExpoStatusBar} from "expo-status-bar";
import {StyleSheet, Platform, StatusBar, View} from "react-native";
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

import CategoriesScreen from "./screens/CategoriesScreen";
import MealsOverviewScreen from "./screens/MealsOverviewScreen";
import {CATEGORIES} from "./data/dummy-data";

export default function App() {
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: {
              backgroundColor: "#351401",
            },
            headerTintColor: "#351401",
            headerTitleStyle: {
              fontWeight: "bold",
              color: "#fff",
            },
            headerTitleAlign: "center",
            contentStyle: {
              backgroundColor: "#3f2f25",
            },
          }}
        >
          <Stack.Screen
            name="Categories"
            component={CategoriesScreen}
            options={{
              title: "All Categories",
            }}
          />
          <Stack.Screen
            name="MealsOverview"
            component={MealsOverviewScreen}
            options={({route}) => {
              const {categoryId} = route.params;
              const categoryTitle = CATEGORIES.find(
                (category) => category.id === categoryId
              ).title;
              return {title: categoryTitle, headerTintColor: "#fff"};
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
