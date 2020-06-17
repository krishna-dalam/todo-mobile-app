import React from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";

function ButtonComponent({ title, buttonStyle, onPress, textStyle }) {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.button, buttonStyle]}>
      <Text style={textStyle}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    width: "100%",
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 25,
  },
});

export default ButtonComponent;
