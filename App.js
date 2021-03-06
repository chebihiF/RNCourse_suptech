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
  const [displayModal, SetdisplayModal] = useState(false);

  const addGoalHandler = (entredGoalText) => {
    setCoursGoals([
      ...coursGoals,
      { text: entredGoalText, id: (Date.now() / 1000).toString() },
    ]);
    SetdisplayModal("rer");
  };

  const deleteGoealHandler = (id) => {
    setCoursGoals((cuurentCoursGoals) => {
      return cuurentCoursGoals.filter((goal) => goal.id != id);
    });
  };

  const showModalHandler = () => {
    SetdisplayModal(true);
  };

  return (
    <View style={styles.container}>
      <Button title="Add Goal" onPress={showModalHandler} />
      {displayModal && <GoalInput onAddGoal={addGoalHandler} />}
      <View style={styles.goalsContainer}>
        <FlatList
          data={coursGoals}
          renderItem={(itemData) => {
            return (
              <GoalItem
                id={itemData.item.id}
                text={itemData.item.text}
                goalItemStyle={styles.goalItem}
                onDeleteItem={deleteGoealHandler}
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
