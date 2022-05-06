import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const TaskItem = (props) => {
  return (
    <View style={styles.item}>
      <View style={styles.leftItem}>
        <TouchableOpacity style={styles.leftCheckBox}></TouchableOpacity>
        <Text style={styles.taskDescription}>{props.text}</Text>
      </View>
      <View style={styles.rightIcon}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 10,
    flexDirection: "row",
    alignContent: "center",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  leftItem: {
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
    padding: 10,
  },
  leftCheckBox: {
    width: 25,
    height: 25,
    backgroundColor: "#55bcf6",
    opacity: 0.4,
    marginRight: 15,
    borderRadius: 6,
  },
  taskDescription: {
    maxWidth: "75%",
  },
  rightIcon: {
    width: 10,
    height: 10,
    borderColor: "#55bcf6",
    borderRadius: 5,
    borderWidth: 1.5,
    marginTop: 16,
  },
});

export default TaskItem;
