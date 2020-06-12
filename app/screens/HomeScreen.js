import React, { useState, useContext } from "react";
import { View, StyleSheet, TouchableOpacity, FlatList } from "react-native";

import { TodoContext } from "../context/AppContext";
import TodoItemComponent from "../components/TodoItemComponent";
import IconComponent from "../components/IconComponent";

function HomeScreen({ navigation }) {
  const [todos, setTodos] = useContext(TodoContext);

  const onCheckboxClick = (key) => {
    setTodos(
      todos.map((todo) => {
        if (todo.key === key) {
          todo.checked = !todo.checked;
        }
        return todo;
      })
    );
    console.log(todos);
  };

  const onDeleteClick = (key) => {
    setTodos(
      todos.filter((todo) => {
        if (todo.key !== key) return true;
      })
    );
  };

  return (
    <View style={styles.container}>
      {todos && (
        <FlatList
          style={styles.flatList}
          data={todos}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <TodoItemComponent
              checked={item.checked}
              onCheckboxClick={() => onCheckboxClick(item.key)}
              onDeleteClick={() => onDeleteClick(item.key)}
              value={item.value}
            />
          )}
        />
      )}
      <View>
        <TouchableOpacity
          style={styles.iconContainer}
          onPress={() => navigation.navigate("Add Todo")}
        >
          <IconComponent iconStyle={styles.icon} size={62} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flex: 1,
  },
  flatList: {
    flex: 1,
  },
  iconContainer: {
    position: "absolute",
    bottom: 10,
    right: 10,
  },
  icon: {
    paddingBottom: 25,
    paddingRight: 15,
  },
});

export default HomeScreen;
