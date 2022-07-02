/** @format */

import { useState } from "react";
import {
  Button,
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import GoalInput from "./components/GoalInput";
import GoalItem from "./components/GoalItem";

export default function App() {
  const [coursGoals, setCoursGoals] = useState([]);

  const addGoalHandler = (entredGoalText) => {
    setCoursGoals([
      ...coursGoals,
      { text: entredGoalText, id: Math.floor(Date.now() / 1000).toString() },
    ]);
  };

  return (
    <View style={styles.container}>
      <GoalInput onAddGoal={addGoalHandler} />
      <View style={styles.goalsContainer}>
        <FlatList
          data={coursGoals}
          renderItem={(itemData) => {
            return (
              <GoalItem
                text={itemData.item.text}
                goalItemStyle={styles.goalItem}
              />
            );
          }}
          keyExtractor={(item, index) => {
            return item.id;
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  goalsContainer: {
    flex: 5,
  },
  goalItem: {
    backgroundColor: "#5e0acc",
  },
});
