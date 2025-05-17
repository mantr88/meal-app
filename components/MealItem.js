import {StyleSheet, Text, View, Image, Pressable, Platform} from "react-native";
import React from "react";
import {useNavigation} from "@react-navigation/native";
import MealDetails from "./MealDetails";

const MealItem = ({mealData}) => {
  const {title, imageUrl, duration, complexity, affordability} = mealData;
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate("MealDetail", {
      ...mealData,
    });
  };
  return (
    <View style={styles.mealItem}>
      <Pressable
        android_ripple={{color: "#ccc"}} // for Android
        style={({pressed}) => [pressed ? styles.btnPress : null]} // for IOS
        onPress={handlePress}
      >
        <View style={styles.innerContainer}>
          <View>
            <Image
              source={{uri: imageUrl}}
              style={styles.image}
            />
            <Text style={styles.title}>{title}</Text>
          </View>
          <MealDetails
            complexity={complexity}
            affordability={affordability}
            duration={duration}
          />
        </View>
      </Pressable>
    </View>
  );
};

export default MealItem;

const styles = StyleSheet.create({
  mealItem: {
    margin: 16,
    borderRadius: 8,
    backgroundColor: "#fff",
    overflow: Platform.OS === "android" ? "hidden" : "visible",
    elevation: 4,
    shadowColor: "black",
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 16,
    shadowOpacity: 0.25,
  },
  innerContainer: {
    borderRadius: 8,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: 200,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    padding: 8,
  },
  description: {
    fontSize: 14,
    textAlign: "center",
    padding: 8,
  },
  btnPress: {
    // IOS only
    opacity: 0.5,
  },
});
