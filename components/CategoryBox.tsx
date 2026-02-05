import { Image } from 'expo-image';
import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import type { Category } from '../data/categories';

type Props = {
  item: Category;
  selected?: boolean;
  onPress?: () => void;
};

export function CategoryBox({ item, selected = false, onPress }: Props) {
  return (
    <Pressable onPress={onPress} style={styles.container}>
      <View style={[styles.box, selected && styles.boxSelected]}>
        <Image
          source={item.image}
          style={[styles.icon, selected && styles.iconSelected]}
        />
      </View>
      <Text style={[styles.title, selected && styles.titleSelected]} numberOfLines={1}>
        {item.title}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    minHeight: 88,
  },
  box: {
    width: 44,
    height: 44,
    borderRadius: 12,
    backgroundColor: '#F5F5F5',
    alignItems: 'center',
    justifyContent: 'center',
  },
  boxSelected: {
    backgroundColor: '#303030',
  },
  icon: {
    width: 20,
    height: 20,
    tintColor: '#909090',
  },
  iconSelected: {
    tintColor: '#FFFFFF',
  },
  title: {
    marginTop: 6,
    fontSize: 14,
    color: '#999999',
    fontWeight: '400',
    fontFamily: 'Nunito',
  },
  titleSelected: {
    color: '#4F63AC',
    fontWeight: '600',
  },
});