import Button from '@/components/Button';
import Input from '@/components/Input';
import { Image } from 'expo-image';
import { router } from 'expo-router';
import { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

export default function SignupScreen() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [agreedToTerms, setAgreedToTerms] = useState(false);

    return (
        <View style={styles.container}>
            <Pressable
                style={styles.backButton}
                onPress={() => router.back()}
            >
                <Image
                    source={require('@/assets/icons/back.svg')}
                    style={styles.backIcon}
                />
                <Text style={styles.backText}>Sign Up</Text>
            </Pressable>

            <Input
                label="Name"
                onChangeText={setName}
                value={name}
                placeholder="John Doe"
                keyboardType="default"
            />

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
                                    ? require('@/assets/icons/eye_closed.svg')
                                    : require('@/assets/icons/eye.svg')
                            }
                            style={styles.eyeImage}
                        />
                    </Pressable>
                }
            />

            <View style={styles.checkboxContainer}>
                <Pressable
                    style={[styles.checkbox, agreedToTerms && styles.checkboxChecked]}
                    onPress={() => setAgreedToTerms(!agreedToTerms)}
                >
                    {agreedToTerms && (
                        <Image
                            source={require('@/assets/icons/check.svg')}
                            style={styles.checkImage}
                        />
                    )}
                </Pressable>
                <Text style={styles.text2}>
                    I agree with <Text style={styles.textBold}>Terms</Text> & <Text style={styles.textBold}>Privacy</Text>
                </Text>
            </View>

            <View style={styles.buttonContainer}>
                <Button text="Sign Up" />
            </View>

            <View style={styles.dividerContainer}>
                <View style={styles.dividerLine} />
                <Text style={styles.dividerText}>Or sign up with</Text>
                <View style={styles.dividerLine} />
            </View>

            <View style={styles.socialButtonContainer}>
                <Pressable style={styles.googleButton}>
                    <Image
                        source={require('@/assets/icons/google-icon.svg')}
                        style={styles.googleIcon}
                    />
                </Pressable>
            </View>

            <View style={styles.signInContainer}>
                <Text style={styles.signInText}>Already have an account?</Text>
                <Pressable onPress={() => router.push('/signin')}>
                    <Text style={styles.signInLink}>Sign In</Text>
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
    checkboxContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        margin: 12,
        marginTop: 20,
    },
    checkbox: {
        width: 24,
        height: 24,
        borderWidth: 2,
        borderColor: '#8D9BB5',
        borderRadius: 4,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 10,
    },
    checkboxChecked: {
        backgroundColor: '#8D9BB5',
    },
    checkImage: {
        width: 12,
        height: 9,
    },
    textBold: {
        fontSize: 14,
        fontFamily: 'montserrat',
        fontWeight: '700',
        color: '#4F63AC',
    },
    text2: {
        fontSize: 14,
        fontFamily: 'montserrat',
        fontWeight: '500',
        color: '#4F63AC',
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