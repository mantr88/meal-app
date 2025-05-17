import {StyleSheet, Text, View} from "react-native";
import React from "react";

const Subtitle = ({children}) => {
  return (
    <View style={styles.subtitleContainer}>
      <Text style={styles.subtitle}>{children}</Text>
    </View>
  );
};

export default Subtitle;

const styles = StyleSheet.create({
  subtitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#e2b497",
    textAlign: "center",
  },
  subtitleContainer: {
    marginVertical: 4,
    marginHorizontal: 24,
    padding: 6,
    borderBottomWidth: 1,
    borderColor: "#e2b497",
  },
});
