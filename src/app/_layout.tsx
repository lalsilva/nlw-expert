import { SafeAreaView } from "react-native";
import { Slot } from "expo-router";

export default function Laout() {
    return (
        <SafeAreaView className="flex-1 bg-slate-900">
            <Slot />
        </SafeAreaView>
    )
}