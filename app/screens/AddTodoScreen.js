import React, { useContext, useState } from "react";
import { View, StyleSheet } from "react-native";

import { TodoContext } from "../context/AppContext";
import ButtonComponent from "../components/ButtonComponent";
import TextInputComponent from "../components/TextInputComponent";

function AddTodoScreen({ navigation }) {
  const [todos, setTodos] = useContext(TodoContext);
  const [todo, setTodo] = useState("");

  const addTodo = () => {
    if (todo.length > 0) {
      setTodos([...todos, { checked: false, key: Date.now(), value: todo }]);
    }
    navigation.goBack();
  };
  return (
    <View style={styles.container}>
      <TextInputComponent
        onChangeText={(text) => setTodo(text)}
        placeholder="Ex: Complete XYZ... task"
      />
      <ButtonComponent
        buttonStyle={styles.button}
        textStyle={styles.text}
        onPress={addTodo}
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
