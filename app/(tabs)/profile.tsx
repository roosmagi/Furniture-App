import { Header } from '@/components/Header';
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      <Header
        title="Profile"
        leftAction="none"
        rightAction="logout"
        onRightPress={() => console.log("logout")}
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
