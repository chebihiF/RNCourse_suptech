/** @format */

import { StyleSheet, View, Text } from "react-native";

const GoalItem = ({ text, goalItemStyle }) => {
  return (
    <View style={[styles.goalItem, goalItemStyle]}>
      <Text style={styles.goalText}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
  },
  goalText: {
    color: "white",
  },
});

export default GoalItem;
