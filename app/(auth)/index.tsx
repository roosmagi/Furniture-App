import Button from '@/components/Button';
import { Image } from 'expo-image';
import { router } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';

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
        <Button
          text="Sign Up"
          onPress={() => router.push('/signup')}
          buttonStyle={styles.signUpBtn}
        />

        <Button
          text="Sign In"
          onPress={() => router.push('/signin')}
          buttonStyle={styles.signInBtn}
          textStyle={styles.signInText}
        />
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
    marginBottom: 16,
  },
  signInBtn: {
    backgroundColor: 'transparent',
    marginHorizontal: 0,
    marginTop: 10,
    marginBottom: 0,
    height: 'auto',
  },
  signInText: {
    color: '#4F63AC',
    fontSize: 16,
    fontWeight: '700',
    fontFamily: 'montserrat',
  },
});
