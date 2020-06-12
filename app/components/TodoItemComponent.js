import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

function TodoItemComponent({
  containerStyle = { backgroundColor: "#f8fc94" },
  value,
  onCheckboxClick,
  onDeleteClick,
  checked,
}) {
  return (
    <View style={[styles.container, containerStyle]}>
      <MaterialCommunityIcons
        style={styles.chechbox}
        name={checked ? "checkbox-marked-outline" : "checkbox-blank-outline"}
        size={25}
        onPress={onCheckboxClick}
      />
      <Text
        style={[
          styles.title,
          checked ? { textDecorationLine: "line-through" } : {},
        ]}
      >
        {value}
      </Text>

      <MaterialCommunityIcons
        style={styles.delete}
        name="trash-can-outline"
        size={25}
        color="red"
        onPress={onDeleteClick}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  chechbox: {
    paddingRight: 10,
  },
  container: {
    padding: 10,
    paddingLeft: 15,
    borderRadius: 15,
    backgroundColor: "#fff",
    marginBottom: 14,
    flexDirection: "row",
  },
  title: {
    fontSize: 18,
    fontWeight: "800",
    marginRight: 60,
  },
  delete: {
    position: "absolute",
    right: 10,
    paddingTop: 10,
  },
});

export default TodoItemComponent;
