/** @format */

import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View
        style={{ flex: 2, backgroundColor: "red", width: 100, height: 100 }}
      >
        <Text>1</Text>
      </View>
      <View
        style={{ flex: 1, backgroundColor: "green", width: 100, height: 100 }}
      >
        <Text>2</Text>
      </View>
      <View
        style={{ flex: 1, backgroundColor: "blue", width: 100, height: 100 }}
      >
        <Text>3</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});
