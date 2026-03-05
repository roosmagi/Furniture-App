import { Header } from '@/components/Header';
import { useRouter } from 'expo-router';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function MyListingScreen() {
  const router = useRouter();
  const num = 10;

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Header
          title="My Listings"
          leftAction="back"
          onLeftPress={() => router.back()}
        />
        <Text style={styles.title}>My Listings</Text>
        <Text style={styles.description}>You have {num} active listings</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 18,
  },
  title: {
    fontSize: 20,
    fontWeight: '700',
    fontFamily: 'Nunito_sans',
    color: '#303030',
    marginTop: 24,
    marginBottom: 8,
  },
  description: {
    fontSize: 14,
    fontFamily: 'Nunito_sans',
    color: '#808080',
  },
});
