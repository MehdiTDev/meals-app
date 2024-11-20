import { View, Text, StyleSheet } from "react-native";

function MealDetails({ duration, complexity, affordability, style, textSyle }) {
  return (
    <View style={[styles.details, style]}>
      <Text style={[styles.detailItem, textSyle]}>{duration}m</Text>
      <Text style={[styles.detailItem, textSyle]}>
        {String(complexity).toUpperCase()}
      </Text>
      <Text style={[styles.detailItem, textSyle]}>
        {String(affordability).toUpperCase()}
      </Text>
    </View>
  );
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
