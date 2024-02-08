import { FlatList, View } from "react-native"

import { CATEGORIES } from "@/utils/data/products"

import { Header } from "@/components/header"
import { CategoryButton } from "@/components/category-button"
import { useState } from "react"

export default function Home() {
    const [categorySelected, setCategorySelected] = useState(CATEGORIES[0])

    function handleCategorySelect(category: string) {
        setCategorySelected(category)
    }

    return (
        <View className="flex-1">
            <Header title="Faça seu pedido" cartQuantityItems={5} />
            <FlatList
                data={CATEGORIES}
                keyExtractor={(item) => item}
                renderItem={({ item }) => (
                    <CategoryButton
                        title={item}
                        isSelected={item === categorySelected}
                        onPress={() => handleCategorySelect(item)}
                    />
                )}
                horizontal
                className="max-h-10 mt-5"
                contentContainerStyle={{ gap: 12, paddingHorizontal: 20 }}
                showsHorizontalScrollIndicator={false}
            />
        </View>
    )
}