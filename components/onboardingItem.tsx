import { StyleSheet, Text, useWindowDimensions, View } from "react-native";

interface OnboardingItemProps {
  item: {
    index: number;
    firstText: string;
    secondText: string;
  };
}

export default function OnboardingItem({ item }: OnboardingItemProps) {
  const { width } = useWindowDimensions();

  return (
    <View style={[styles.container, { width }]}>
      <Text>{item.firstText}</Text>
      <Text>{item.secondText}</Text>
      <Text>{item.index}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
