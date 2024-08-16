import { Header } from "@/components/header";
import { StyleSheet, View, Text } from "react-native";

import { useContextStore } from "@/constants/store/userContext";
import { History } from "./components/history";

export default function Home() {
  //context
  const user = useContextStore()

  return (
    <View style={styles.container}>
      <Header>
        <Header.Title>{user?.data?.login}</Header.Title>
      </Header>
      <History/>
      <View style={styles.separator} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
