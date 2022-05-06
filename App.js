import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  TextInput,
  Platform,
  TouchableOpacity,
  Keyboard,
} from "react-native";
import TaskItem from "./components/taskItem";

export default function App() {
  const [task, setTask] = useState();
  const [taskList, setTaskList] = useState([]);

  const handleAddTask = () => {
    Keyboard.dismiss();
    setTaskList([...taskList, task]);
    setTask(null);
  };

  const doneWithTask = (index) => {
    let allTasks = [...taskList];
    allTasks.splice(index, 1);
    setTaskList(allTasks);
  };
  return (
    <View style={styles.container}>
      <View style={styles.taskContainer}>
        <Text style={styles.title}>Today's task!</Text>
        <View style={styles.taskList}>
          {taskList.map((task, index) => {
            return (
              <TouchableOpacity key={index} onPress={() => doneWithTask(index)}>
                <TaskItem text={task} />
              </TouchableOpacity>
            );
          })}
        </View>
      </View>

      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.keyboardContainer}
      >
        <TextInput
          style={styles.input}
          placeholder={"Enter a task"}
          value={task}
          onChangeText={(task) => setTask(task)}
        ></TextInput>

        <TouchableOpacity onPress={() => handleAddTask()}>
          <View style={styles.iconWrapper}>
            <Text style={styles.iconStyle}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "gray",
  },
  taskContainer: {
    paddingTop: 100,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 20,
    color: "red",
  },
  taskList: {
    marginTop: 25,
  },
  keyboardContainer: {
    flexDirection: "row",
    position: "absolute",
    marginTop: 800,
    width: "100%",
    justifyContent: "space-around",
    alignItems: "center",
  },
  input: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: "#FFF",
    width: 270,
    borderRadius: 15,
    borderColor: "skyblue",
    borderWidth: 2,
  },
  iconWrapper: {
    width: 60,
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "skyblue",
    borderWidth: 2,
    backgroundColor: "#fff",
    borderRadius: 50,
  },
  iconStyle: {},
});
