import Button from '@/components/Button';
import { Header } from '@/components/Header';
import ListItem from '@/components/ListItem';
import { useRouter } from 'expo-router';
import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function ProfileScreen() {
  const num = 10;
  const router = useRouter();

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Header
          title="Profile"
          leftAction="none"
          rightAction="logout"
          onRightPress={() => console.log("logout")}
        />
        <Text style={styles.name}>Elina Hovakimyan</Text>
        <Text style={styles.email}>elina.hovakimyan@gmail.com</Text>
        <View style={styles.listSection}>
          <Pressable onPress={() => router.push('/(modal)/mylisting')}>
            <ListItem title="My Listings" subtitle={`Already have ${num} listings`} />
          </Pressable>
          <Pressable onPress={() => router.push('/(modal)/settings')}>
            <ListItem title="Settings" subtitle="Account, FAQ, Contact" />
          </Pressable>
        </View>
        <View style={styles.buttonContainer}>
          <Button 
            text="Add a new listing" 
            onPress={() => console.log("Add new listing")}
            buttonStyle={{ marginHorizontal: 0, marginBottom: 0 }}
          />
        </View>
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
    alignItems: 'stretch',
    padding: 18,
    paddingTop: 0,
  },
  buttonContainer: {
    marginTop: 'auto',
    paddingHorizontal: 18,
    flex: 1,
    justifyContent: 'flex-end',
  },
  listSection: {
    marginTop: 26,
    gap: 26,
  },
  name: {
    fontSize: 20,
    fontWeight: '700',
    fontFamily: 'Nunito_sans',
    color: '#303030',
    marginBottom: 8,
  },
  email: {
    fontSize: 14,
    fontFamily: 'Nunito_sans',
    fontWeight: '400',
    color: '#808080',
  },
});
