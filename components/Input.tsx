import React from 'react';
import {
    TextInput as RNTextInput,
    StyleSheet,
    Text,
    TextStyle,
    View,
    ViewStyle,
} from 'react-native';

type InputProps = React.ComponentProps<typeof RNTextInput> & {
	label?: string;
	rightAccessory?: React.ReactNode;
	containerStyle?: ViewStyle;
	labelStyle?: TextStyle;
	inputWrapperStyle?: ViewStyle;
	inputStyle?: TextStyle;
};

export default function Input({
	label,
	rightAccessory,
	containerStyle,
	labelStyle,
	inputWrapperStyle,
	inputStyle,
	...rest
}: InputProps) {
	return (
		<View style={containerStyle}>
			{label ? (
				<Text style={[styles.label, labelStyle]}>{label}</Text>
			) : null}
			<View style={[styles.inputWrapper, inputWrapperStyle]}>
				<RNTextInput
					style={[styles.input, inputStyle]}
					placeholderTextColor="#8D9BB5"
					{...rest}
				/>
				{rightAccessory ? rightAccessory : null}
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	label: {
		marginLeft: 14,
		fontSize: 14,
		fontFamily: 'montserrat',
		fontWeight: '500',
		marginTop: 16,
		color: '#4F63AC',
	},
	inputWrapper: {
		flexDirection: 'row',
		alignItems: 'center',
		height: 60,
		margin: 12,
		borderWidth: 1,
		borderRadius: 14,
		borderColor: '#8D9BB5',
	},
	input: {
		flex: 1,
		padding: 10,
		fontFamily: 'montserrat',
		fontWeight: '500',
		fontSize: 14,
		color: '#000000',
	},
});
