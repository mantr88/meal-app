import {FlatList, StyleSheet, Text, View} from "react-native";
import {CATEGORIES} from "../data/dummy-data";
import CategoryGridTitle from "../components/CategoryGridTitle";

function renderItem(itemData) {
  return (
    <CategoryGridTitle
      title={itemData.item.title}
      color={itemData.item.color}
    />
  );
}

const CategoriesScreen = () => {
  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={renderItem}
      numColumns={2}
    />
  );
};

export default CategoriesScreen;

const styles = StyleSheet.create({});
