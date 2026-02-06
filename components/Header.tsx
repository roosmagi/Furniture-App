import { Colors } from "@/constants/Colors";
import { Image } from "expo-image";
import React, { useMemo, useState } from "react";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";

type LeftAction = "back" | "search" | "none";
type RightAction = "logout" | "none";

type Props = {
  title: string;
  leftAction?: LeftAction;
  rightAction?: RightAction;

  onLeftPress?: () => void;
  onRightPress?: () => void;

  enableSearch?: boolean;
  keyword?: string;
  onKeywordChange?: (value: string) => void;
};

export function Header({
  title,
  leftAction = "none",
  rightAction = "none",
  onLeftPress,
  onRightPress,
  enableSearch = false,
  keyword = "",
  onKeywordChange,
}: Props) {
  const [showSearchInput, setShowSearchInput] = useState(false);

  const leftIconSource = useMemo(() => {
    if (leftAction === "back") return require("@/assets/icons/back.svg");
    if (leftAction === "search") return require("@/assets/icons/search.svg");
    return null;
  }, [leftAction]);

  const rightIconSource = useMemo(() => {
    if (rightAction === "logout") return require("@/assets/icons/logout.svg");
    return null;
  }, [rightAction]);

  function handleLeft() {
    if (leftAction === "search" && enableSearch) {
      setShowSearchInput((v) => !v);
      return;
    }
    onLeftPress?.();
  }

  return (
    <View style={styles.wrapper}>
      <View style={styles.row}>
        <View style={styles.side}>
          {leftIconSource ? (
            <Pressable onPress={handleLeft} hitSlop={10}>
              <Image source={leftIconSource} style={styles.icon} tintColor={Colors.brand} />
            </Pressable>
          ) : (
            <View style={styles.sidePlaceholder} />
          )}
        </View>

        <Text numberOfLines={1} style={styles.title}>
          {title}
        </Text>

        <View style={styles.side}>
          {rightIconSource ? (
            <Pressable onPress={onRightPress} hitSlop={10}>
              <Image source={rightIconSource} style={styles.icon} tintColor={Colors.brand} />
            </Pressable>
          ) : (
            <View style={styles.sidePlaceholder} />
          )}
        </View>
      </View>

      {enableSearch && showSearchInput ? (
        <View style={styles.searchRow}>
          <Image source={require("@/assets/icons/search.svg")} style={styles.searchIcon} tintColor={Colors.brand} />
          <TextInput
            value={keyword}
            onChangeText={onKeywordChange}
            placeholder="Otsi..."
            placeholderTextColor={Colors.mutedText}
            style={styles.searchInput}
            autoCorrect={false}
            autoCapitalize="none"
            returnKeyType="search"
          />
        </View>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    paddingHorizontal: 18,
    paddingTop: 25,
    paddingBottom: 8,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  side: {
    width: 32,
    alignItems: "flex-start",
  },
  sidePlaceholder: {
    width: 22,
    height: 22,
  },
  icon: {
    width: 20,
    height: 20,
  },
  title: {
    flex: 1,
    textAlign: "center",
    fontSize: 16,
    fontWeight: "700",
    fontFamily: "montserrat",
    color: Colors.text,
    paddingHorizontal: 12,
  },
  searchRow: {
    marginTop: 10,
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    backgroundColor: Colors.card,
    borderWidth: 1,
    borderColor: Colors.border,
    borderRadius: 12,
    paddingHorizontal: 12,
    paddingVertical: 10,
  },
  searchIcon: {
    width: 18,
    height: 18,
  },
  searchInput: {
    flex: 1,
    fontSize: 14,
    color: Colors.text,
  },
});
