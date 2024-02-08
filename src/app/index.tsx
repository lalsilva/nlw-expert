import { View } from "react-native"
import { Header } from "./header"

export default function Home() {
    return (
        <View className="flex-1">
            <Header title="Faça seu pedido" cartQuantityItems={5} />
        </View>
    )
}