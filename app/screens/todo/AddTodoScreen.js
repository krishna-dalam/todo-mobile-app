import React, { useContext, useState } from "react";
import { View, StyleSheet } from "react-native";

import { TodoContext } from "../../context/AppContext";
import { default as Button } from "../../components/ButtonComponent";
import { default as Input } from "../../components/TextInputComponent";
import AsyncStorage from "@react-native-community/async-storage";

const storeData = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, value);
  } catch (e) {
    console.log(e);
  }
};

function AddTodoScreen({ navigation }) {
  const [todos, setTodos] = useContext(TodoContext);
  const [todo, setTodo] = useState("");
  const key = Date.now();
  const value = { checked: false, key, value: todo };
  const addTodo = () => {
    if (todo.length > 0) {
      setTodos([...todos, value]);
    }
    const jsonTodo = JSON.stringify(value);
    storeData(key, jsonTodo);
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Input
        onChangeText={(text) => setTodo(text)}
        placeholder="Ex: Complete XYZ... task"
        multiline={true}
      />
      <Button
        buttonStyle={styles.button}
        textStyle={styles.text}
        onPress={addTodo}
        title="Add Todo"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    marginTop: 15,
    backgroundColor: "#00c5ff",
    width: 150,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
  },
  text: { color: "#fff" },
});

export default AddTodoScreen;
