import { StyleSheet, Text, View } from "react-native";
import { useRoute } from "@react-navigation/native";

import { MEALS } from "../data/dummy-data";

function MealsOverviewScreen({ route }) {
    const route=useRoute();
    route.params.categoryId
    const categoryId=route.params.categoryId;
  return (
    <View style={styles.container}>
      <Text>Meals Overview Screen-{categoryId}</Text>
    </View>
  );
}

export default MealsOverviewScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
