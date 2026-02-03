import { View, Text, StyleSheet, Pressable } from 'react-native';
import { Image } from 'expo-image';
import { router } from 'expo-router';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Image
        source={require('@/assets/images/splash-image.jpg')}
        style={styles.image}
        contentFit="contain"
      />

      <Text style={styles.title}>You’ll Find</Text>
      <Text style={styles.title2}>All you need</Text>
      <Text style={styles.title}>Here!</Text>

      <View style={styles.buttonContainer}>
        <Pressable style={styles.signUpBtn}>
          <Text style={styles.btnText}>Sign up</Text>
        </Pressable>

        <Pressable>
          <Text style={styles.signIn}>Sign in</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 14,
    backgroundColor: '#FFFFFF',
  },
  image: {
    width: "100%",
    height: 300,
  },
  title: {
    fontFamily: 'DM_Sans',
    fontWeight: '700',
    fontSize: 40,
    textAlign: 'center',
  },
  title2: {
    color: '#FCA34D',
    fontSize: 40,
    textAlign: 'center',
    fontFamily: 'DM_Sans',
    fontWeight: '700',
    textDecorationLine: 'underline',
  },
  buttonContainer: {
    marginTop: 30,
    alignItems: 'center',
  },
  signUpBtn: {
    backgroundColor: '#4F63AC',
    width: 303,
    height: 60,
    justifyContent: 'center',
    borderRadius: 8,
    marginBottom: 16,
  },
  btnText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '600',
  },
  signIn: {
    color: '#4F63AC',
    fontSize: 16,
    fontWeight: '600',
  },
});
