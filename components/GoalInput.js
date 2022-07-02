/** @format */

import { useState } from "react";
import { StyleSheet, View, TextInput, Button } from "react-native";

const GoalInput = ({ onAddGoal }) => {
  const [entredGoalText, setEntredGoalText] = useState("");
  const goalInputHandler = (entredText) => {
    setEntredGoalText(entredText);
  };

  const saveGoalHandler = () => {
    onAddGoal(entredGoalText);
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        value={entredGoalText}
        style={styles.textInput}
        placeholder="Your Course goal !!"
        onChangeText={goalInputHandler}
      />
      <Button title="Add Goal" onPress={saveGoalHandler} />
    </View>
  );
};

const styles = StyleSheet.create({
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
});

export default GoalInput;
