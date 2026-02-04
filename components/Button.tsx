import React from 'react';
import {
    Pressable,
    StyleSheet,
    Text,
    TextStyle,
    ViewStyle,
} from 'react-native';

type ButtonProps = React.ComponentProps<typeof Pressable> & {
    text: string;
    buttonStyle?: ViewStyle;
    textStyle?: TextStyle;
};

export default function Button({
    text,
    buttonStyle,
    textStyle,
    ...rest
}: ButtonProps) {
    return (
        <Pressable style={[styles.button, buttonStyle]} {...rest}>
            <Text style={[styles.text, textStyle]}>{text}</Text>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#4F63AC',
        alignSelf: 'stretch',
        height: 60,
        justifyContent: 'center',
        borderRadius: 8,
        marginHorizontal: 12,
        marginBottom: 16,
    },
    text: {
        color: '#fff',
        textAlign: 'center',
        fontSize: 16,
        fontWeight: '700',
        fontFamily: 'montserrat',
    },
});
