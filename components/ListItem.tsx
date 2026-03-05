import { Image } from "expo-image";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

type ListItemProps = {
    title: string;
    subtitle?: string;
};

export default function ListItem({ title, subtitle }: ListItemProps) {
    return (
        <View style={styles.container}>
            <View style={[styles.content, !subtitle && styles.contentCentered]}>
                <Text style={styles.title}>{title}</Text>
                {subtitle && <Text style={styles.subtitle}>{subtitle}</Text>}
            </View>
            <Image style={styles.arrow} source={require("@/assets/icons/arrow.svg")} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        padding: 16,
        backgroundColor: "#fff",
        borderRadius: 4,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,

        elevation: 6,
    },
    content: {
        flexDirection: "column",
    },
    contentCentered: {
        flex: 1,
        justifyContent: "center",
        alignItems: "flex-start",
    },
    title: {
        fontSize: 18,
        fontWeight: "700",
        fontFamily: "Nunito_sans",
        color: "#4F63AC",
    },
    subtitle: {
        fontSize: 12,
        fontWeight: "400",
        fontFamily: "Nunito_sans",
        color: "#808080",
    },
    arrow: {
        width: 6,
        height: 12,
        tintColor: "#4F63AC",

    },
});