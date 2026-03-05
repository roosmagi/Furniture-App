import { FavoriteItem } from "@/components/FavoriteItem";
import { Header } from "@/components/Header";
import { Colors } from "@/constants/Colors";
import type { Product } from "@/data/products";
import { products } from "@/data/products";
import React from "react";
import { FlatList, StyleSheet, View } from "react-native";

export default function FavoritesScreen() {
  const favorites: Product[] = products.slice(0, 3);

  return (
    <View style={styles.container}>
      <Header title="Favorites" />
      <FlatList
        data={favorites}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => <FavoriteItem item={item} onRemove={() => console.log("remove", item.id)} />}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        contentContainerStyle={styles.content}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    padding: 18,
    backgroundColor: Colors.background 
  },
  content: { 
    paddingHorizontal: 16, 
    paddingVertical: 12 
  },
  separator: { 
    height: 1, 
    backgroundColor: Colors.border, 
    marginVertical: 10 
  },
});
