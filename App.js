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
import GoalItem from "./components/GoalItem";

export default function App() {
  const [entredGoalText, setEntredGoalText] = useState("");
  const [coursGoals, setCoursGoals] = useState([]);
  //text
  const goalInputHandler = (entredText) => {
    setEntredGoalText(entredText);
  };

  const addGoalHandler = () => {
    setCoursGoals([
      ...coursGoals,
      { text: entredGoalText, id: Math.floor(Date.now() / 1000).toString() },
    ]);
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          value={entredGoalText}
          style={styles.textInput}
          placeholder="Your Course goal !!"
          onChangeText={goalInputHandler}
        />
        <Button title="Add Goal" onPress={addGoalHandler} />
      </View>
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
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingBottom: 24,
    borderBottomWidth: 1,
    borderColor: "#ccc",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#ccc",
    width: "70%",
    padding: 8,
    marginRight: 8,
  },
  goalsContainer: {
    flex: 5,
  },
  goalItem: {
    backgroundColor: "#ccc",
  },
});
