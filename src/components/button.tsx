import {Pressable, StyleSheet, View } from "react-native"
import { Box, Text } from "./theme"

type ButtonProps = {
	label: string
	onPress: () => void
	onHold?: () => void
	isDisabled?: boolean
}

const Button = ({label,onPress,onHold,isDisabled} : ButtonProps) => {
	return (
		<Pressable onPress={onPress} onLongPress={onHold} disabled={isDisabled}>
			<Box backgroundColor= {isDisabled ? "primary_dark" : "primary"} paddingVertical="1" borderRadius="roundedBigger">
				<Text variant="text16" fontWeight="700" color="secondary_light" textAlign="center" >{label}</Text>
			</Box>
		</Pressable>
		
	)
}

export default Button

const Style = StyleSheet.create({})