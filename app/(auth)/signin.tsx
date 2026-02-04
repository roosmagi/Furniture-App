import Button from '@/components/Button';
import Input from '@/components/Input';
import { Image } from 'expo-image';
import { router } from 'expo-router';
import { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

export default function SigninScreen() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    return (
        <View style={styles.container}>
            <Pressable
                style={styles.backButton}
                onPress={() => router.back()}
            >
                <Image
                    source={require('@/assets/images/back.svg')}
                    style={styles.backIcon}
                />
                <Text style={styles.backText}>Sign In</Text>
            </Pressable>

            <Input
                label="E-mail"
                onChangeText={setEmail}
                value={email}
                placeholder="example@gmail.com"
                keyboardType="default"
            />

            <Input
                label="Password"
                onChangeText={setPassword}
                value={password}
                placeholder="**********"
                secureTextEntry={!showPassword}
                keyboardType="default"
                rightAccessory={
                    <Pressable
                        style={styles.eyeIcon}
                        onPress={() => setShowPassword(!showPassword)}
                    >
                        <Image
                            source={
                                showPassword
                                    ? require('@/assets/images/eye_closed.svg')
                                    : require('@/assets/images/eye.svg')
                            }
                            style={styles.eyeImage}
                        />
                    </Pressable>
                }
            />

            <View style={styles.buttonContainer}>
                <Button text="Sign In" />
            </View>

            <View style={styles.dividerContainer}>
                <View style={styles.dividerLine} />
                <Text style={styles.dividerText}>Or sign in with</Text>
                <View style={styles.dividerLine} />
            </View>

            <View style={styles.socialButtonContainer}>
                <Pressable style={styles.googleButton}>
                    <Image
                        source={require('@/assets/images/google-icon.svg')}
                        style={styles.googleIcon}
                    />
                </Pressable>
            </View>

            <View style={styles.signInContainer}>
                <Text style={styles.signInText}>Don't have an account?</Text>
                <Pressable onPress={() => router.push('/signup')}>
                    <Text style={styles.signInLink}>Sign Up</Text>
                </Pressable>
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        padding: 18,
    },
    backButton: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 16,
        gap: 16,
    },
    backIcon: {
        width: 18.41,
        height: 17.41,
    },
    backText: {
        fontSize: 26,
        fontFamily: 'montserrat',
        fontWeight: '600',
        color: '#4F63AC',
    },

    eyeIcon: {
        padding: 10,
    },
    eyeImage: {
        width: 24,
        height: 24,
    },
    buttonContainer: {
        marginTop: 15,
        alignItems: 'stretch',
    },

    dividerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 12,
        marginTop: 15,
    },
    dividerLine: {
        flex: 1,
        height: 1,
        backgroundColor: '#DADADA',
    },
    dividerText: {
        marginHorizontal: 10,
        fontSize: 14,
        fontFamily: 'montserrat',
        fontWeight: '600',
        color: '#4F63AC',
    },
    socialButtonContainer: {
        marginTop: 16,
        alignItems: 'center',
    },
    googleButton: {
        width: 142,
        height: 60,
        backgroundColor: '#3F4A59',
        borderRadius: 8,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 8,
    },
    googleIcon: {
        width: 28,
        height: 28,
    },
    signInContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 50,
        gap: 6,
    },
    signInText: {
        fontSize: 14,
        fontFamily: 'montserrat',
        fontWeight: '500',
        color: '#4F63AC',
    },
    signInLink: {
        fontSize: 14,
        fontFamily: 'montserrat',
        fontWeight: '600',
        color: '#4F63AC',
    },
});