import React from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

type ListItemProps = {
    label: string;
    value: string;
    onChangeText: (text: string) => void;
    editable?: boolean;
};

export default function EditableBox({ label, value, onChangeText, editable }: ListItemProps) {
    return (
        <View style={styles.container}>
            <Text style={styles.label}>{label}</Text>
            <TextInput editable={editable} value={value} onChangeText={onChangeText} style={styles.input} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "column",
        padding: 10,
        borderRadius: 4,
        backgroundColor: "#fff",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,
        elevation: 6,
        marginBottom: 10,
    },
    label: {
        fontSize: 12,
        fontWeight: "400",
        fontFamily: "Nunito_sans",
        color: "#9b9b9b",
        marginBottom: 8,
    },
    input: {
        fontSize: 14,  
        fontWeight: "600",
        fontFamily: "Nunito_sans",
        color: "#4f63ac",
    },
});