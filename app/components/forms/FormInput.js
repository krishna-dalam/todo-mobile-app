import React from "react";
import { StyleSheet } from "react-native";
import { useFormikContext } from "formik";

import { default as TextInput } from "../TextInputComponent";
import { default as Error } from "./FormErrorComponent";
import { colors } from "../../config";

function FormInput({ icon, name, placeholder, style, ...otherObjects }) {
  const { errors, setFieldTouched, touched, handleChange } = useFormikContext();
  return (
    <>
      <TextInput
        icon={icon}
        containerStyle={[styles.containerStyle, style]}
        onChangeText={handleChange(name)}
        onBlur={() => setFieldTouched(name)}
        autoComplete={false}
        autoCapitalize="none"
        placeholder={placeholder}
        {...otherObjects}
      />
      <Error error={errors[name]} visible={touched[name]} />
    </>
  );
}

const styles = StyleSheet.create({
  containerStyle: {
    backgroundColor: colors.medium,
  },
});

export default FormInput;
