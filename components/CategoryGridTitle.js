import {Pressable, StyleSheet, Text, View, Platform} from "react-native";
import React from "react";

const CategoryGridTitle = ({title, color, onPress}) => {
  return (
    <View style={[styles.gridItem]}>
      <Pressable
        android_ripple={{color: "#ccc"}}
        style={({pressed}) => [styles.button, pressed ? styles.btnPress : null]}
        onPress={onPress}
      >
        <View style={[styles.innerContainer, {backgroundColor: color}]}>
          <Text style={styles.title}>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
};

export default CategoryGridTitle;

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 16,
    height: 150,

    elevation: 4,
    shadowColor: "black",
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 8,
    shadowOpacity: 0.25,
    overflow: Platform.OS === "android" ? "hidden" : "visible",
  },
  innerContainer: {
    flex: 1,
    padding: 16,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    flex: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  btnPress: {
    // IOS only
    opacity: 0.5,
  },
});
