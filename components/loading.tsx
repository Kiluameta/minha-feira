import Colors from "@/constants/Colors";
import { ActivityIndicator, StyleSheet } from "react-native";

export default function Loading() {
    return <ActivityIndicator style={style.loading} />
}

const style = StyleSheet.create({
    loading: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: Colors.green[500],
        color: Colors.green[300],
    }
})