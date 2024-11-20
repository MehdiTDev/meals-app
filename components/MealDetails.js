import { View, Text, StyleSheet } from "react-native";

function MealDetails({ duration, complexity, affordability }) {
  <View style={styles.details}>
    <Text style={styles.detailItem}>{duration}m</Text>
    <Text style={styles.detailItem}>{String(complexity).toUpperCase()}</Text>
    <Text style={styles.detailItem}>{String(affordability).toUpperCase()}</Text>
  </View>;
}

export default MealDetails;

const styles = StyleSheet.create({
  details: {
    flexDirection: "row",
    alignItem: "center",
    padding: 8,
    justifyContent: "center",
  },
  detailItem: {
    marginHorizontal: 4,
    fontSize: 12,
  },
});
