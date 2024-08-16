import { Stack } from "expo-router";

export default function HistoryLayout(){
    return(
        <Stack>
            <Stack.Screen options={{ headerShown: false }} name="index" />
        </Stack>
    )
}