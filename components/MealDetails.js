import {StyleSheet, Text, View} from "react-native";
import React from "react";

const MealDetails = ({
  duration,
  complexity,
  affordability,
  style,
  textStyle,
}) => {
  return (
    <View style={[styles.details, style]}>
      <Text style={[styles.detailsText, textStyle]}>{duration}</Text>
      <Text style={[styles.detailsText, textStyle]}>
        {complexity.toUpperCase()}
      </Text>
      <Text style={[styles.detailsText, textStyle]}>
        {affordability.toUpperCase()}
      </Text>
    </View>
  );
};

export default MealDetails;

const styles = StyleSheet.create({
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
});
