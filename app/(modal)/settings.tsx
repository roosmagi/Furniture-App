import EditableBox from '@/components/EditableBox';
import { Header } from '@/components/Header';
import ListItem from '@/components/ListItem';
import { Image } from 'expo-image';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function SettingsScreen() {
    const router = useRouter();
    const [isEditing, setIsEditing] = useState(false);

    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.container}>
                <Header
                    title="Settings"
                    leftAction="back"
                    onLeftPress={() => router.back()}
                />
                <View style={styles.titleRow}>
                    <Text style={styles.title}>Personal Information</Text>
                    <Pressable onPress={() => setIsEditing(!isEditing)}>
                        <Image source={require('@/assets/icons/edit.svg')} style={styles.editIcon} />
                    </Pressable>
                </View>
                <EditableBox label="Name" value="Elina Hovakimyan" onChangeText={() => { }} editable={isEditing} />
                <EditableBox label="Email" value="elina.hovakimyan@gmail.com" onChangeText={() => { }} editable={false} />

                <Text style={styles.title}>Help Center</Text>
                <View style={styles.helpSection}>
                    <ListItem title="FAQ" />
                    <ListItem title="Contact Us" />
                    <ListItem title="Privacy & Terms" />
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
        padding: 18,
    },
    titleRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 24,
        marginBottom: 8,
    },
    title: {
        fontSize: 16,
        fontWeight: '600',
        fontFamily: 'Nunito_sans',
        color: '#909191',
    },
    editIcon: {
        width: 16,
        height: 20,
        tintColor: '#4F63AC',
    },
    helpSection: {
        marginTop: 26,
        gap: 10,
    },
});
