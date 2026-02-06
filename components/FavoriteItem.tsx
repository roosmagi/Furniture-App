import { Colors } from "@/constants/Colors";
import type { Product } from "@/data/products";
import { Image } from "expo-image";
import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

type Props = {
  item: Product;
  onRemove?: () => void;
};

export function FavoriteItem({ item, onRemove }: Props) {
  return (
    <View style={styles.row}>
      <Image source={{ uri: item.image }} style={styles.image} />
      <View style={styles.center}>
        <Text style={styles.title} numberOfLines={1}>
          {item.title}
        </Text>
        <Text style={styles.price}>{item.price}</Text>
      </View>
      <Pressable onPress={onRemove} hitSlop={10} style={styles.removeBtn}>
        <Image source={require("@/assets/icons/remove.svg")} style={styles.removeIcon} />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 14,
    backgroundColor: Colors.border,
  },
  center: {
    flex: 1,
    paddingHorizontal: 12,
  },
  title: {
    fontSize: 14,
    fontWeight: "700",
    fontFamily: "nunito-sans",
    color: Colors.text,
  },
  price: {
    marginTop: 6,
    fontSize: 16,
    color: Colors.mutedText,
    fontWeight: "600",
    fontFamily: "nunito-sans",
  },
  removeBtn: {
    paddingLeft: 8,
    paddingVertical: 8,
  },
  removeIcon: {
    width: 20,
    height: 20,
  },
});
