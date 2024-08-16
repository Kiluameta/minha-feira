import { Stack } from "expo-router";

export default function AccountLayout(){
    return(
        <Stack>
            <Stack.Screen options={{ headerShown: false }} name="index" />
        </Stack>
    )
}