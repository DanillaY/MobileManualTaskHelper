import {StyleSheet, View } from "react-native"
import { Box, Text } from "./theme"

const Button = () => {
	return (
		<Box backgroundColor="primary" padding="4" borderRadius="roundedBigger">
			<Text variant="text16">Testing button</Text>
		</Box>
	)
}

export default Button

const Style = StyleSheet.create({})