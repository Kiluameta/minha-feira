import React, { ReactNode } from "react";
import {
  Platform,
  TextInput,
  TextInputProps,
  View,
  ViewProps,
} from "react-native";

import Colors from "@/constants/Colors";

type Variants = "primary" | "secondary";

type InputProps = ViewProps & {
  children: ReactNode;
  variant?: Variants;
};

function Input({ children, variant = "primary", ...rest }: InputProps) {
  return <View {...rest}>{children}</View>;
}

function Field({ ...rest }: TextInputProps) {
  return (
    <TextInput
      placeholderTextColor={Colors.green[300]}
      cursorColor={Colors.green[100]}
      selectionColor={Platform.OS === "ios" ? Colors.green[100] : undefined}
      {...rest}
    />
  );
}

Input.Field = Field;

export { Input };
