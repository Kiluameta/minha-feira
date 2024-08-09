import { createContext, useContext } from "react";
import {
  Text,
  TextProps,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native";

type Variants = "primary" | "secondary";

type ButtonProps = TouchableOpacityProps & {
  variant?: Variants;
};

const ThemeContext = createContext<{ variant?: Variants }>({});

function Button({
  variant = "primary",
  disabled,
  children,
  ...rest
}: ButtonProps) {
  return (
    <TouchableOpacity
      disabled={disabled}
      {...rest}
    >
      <ThemeContext.Provider value={{ variant }}>
        {children}
      </ThemeContext.Provider>
    </TouchableOpacity>
  );
}

function Title({ children }: TextProps) {
  const { variant } = useContext(ThemeContext);
  return (
    <Text>
      {children}
    </Text>
  );
}

Button.Title = Title;

export { Button };