import React from "react";
import { StyleSheet, Text } from "react-native";

function ErrorComponent({ error, visible }) {
  if (!visible || !error) return null;
  return <Text style={styles.container}>{error}</Text>;
}

const styles = StyleSheet.create({
  container: {
    marginTop: 5,
    marginLeft: 25,
    color: "red",
    fontSize: 12,
  },
});

export default ErrorComponent;
