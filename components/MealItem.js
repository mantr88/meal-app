import {StyleSheet, Text, View, Image, Pressable, Platform} from "react-native";
import React from "react";

const MealItem = ({title, imageUri, duration, complexity, affordability}) => {
  return (
    <View style={styles.mealItem}>
      <Pressable
        android_ripple={{color: "#ccc"}} // for Android
        style={({pressed}) => [pressed ? styles.btnPress : null]} // for IOS
        onPress={() => {}}
      >
        <View style={styles.innerContainer}>
          <View>
            <Image
              source={{uri: imageUri}}
              style={styles.image}
            />
            <Text style={styles.title}>{title}</Text>
          </View>
          <View style={styles.details}>
            <Text style={styles.detailsText}>{duration}</Text>
            <Text style={styles.detailsText}>{complexity.toUpperCase()}</Text>
            <Text style={styles.detailsText}>
              {affordability.toUpperCase()}
            </Text>
          </View>
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
  details: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 8,
  },
  detailsText: {
    fontSize: 12,
    marginHorizontal: 4,
    color: "#888",
  },
  btnPress: {
    // IOS only
    opacity: 0.5,
  },
});
