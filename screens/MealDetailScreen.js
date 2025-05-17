import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  Pressable,
} from "react-native";
import React, {useLayoutEffect} from "react";
import MealDetails from "../components/MealDetails";
import Subtitle from "../components/MealDetails/Subtitle";
import List from "../components/MealDetails/List";
import IconButton from "../components/IconButton";

const MealDetailScreen = ({route, navigation}) => {
  const {
    title,
    imageUrl,
    ingredients,
    steps,
    duration,
    complexity,
    affordability,
  } = route.params;

  const onPressHandler = () => {
    console.log("Pressed");
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <IconButton
            icon="star"
            color="white"
            onPress={onPressHandler}
          />
        );
      },
    });
  }, [navigation]);

  return (
    <ScrollView style={styles.rootContainer}>
      <Image
        source={{uri: imageUrl}}
        style={styles.image}
      />
      <Text style={styles.title}>{title}</Text>
      <MealDetails
        affordability={affordability}
        duration={duration}
        complexity={complexity}
        textStyle={styles.detailsText}
      />
      <View style={styles.listContainer}>
        <Subtitle>Ingredients</Subtitle>
        <List listData={ingredients} />
        <Subtitle>Steps</Subtitle>
        <List listData={steps} />
      </View>
    </ScrollView>
  );
};

export default MealDetailScreen;

const styles = StyleSheet.create({
  rootContainer: {
    marginBottom: 24,
  },
  image: {
    width: "100%",
    height: 350,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 8,
    color: "white",
  },
  detailsText: {
    color: "white",
  },
  listContainer: {
    width: "80%",
    alignSelf: "center",
  },
});
