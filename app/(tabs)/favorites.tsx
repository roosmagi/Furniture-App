import { Header } from '@/components/Header';
import React from 'react';
import { View, StyleSheet } from 'react-native';

export default function FavoritesScreen() {
  return (
    <View style={styles.container}>
       <Header
              title="Favorites"
              leftAction="none"
              rightAction="none"
            />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'flex-start',
    padding: 18,
    paddingTop: 25,
  },
});
