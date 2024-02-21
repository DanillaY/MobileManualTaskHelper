import {Pressable, StyleSheet, View } from "react-native"
import theme, { Box, Text } from "./theme"
import { ResponsiveValue } from "@shopify/restyle/dist/types"

type ButtonProps = {
	label: string
	borderRadiius?: ResponsiveValue<"none" | "roundedNormal" | "roundedBig" | "roundedBigger", undefined> | undefined,
	fontSize?: ResponsiveValue<"text13" | "text16" | "text18" | "text20" | "text24" | "text36" | "text48", undefined> | undefined,
	onPress: () => void
	onHold?: () => void
	isDisabled?: boolean
}

const Button = ({label,onPress,onHold,borderRadiius,fontSize,isDisabled} : ButtonProps) => {
	return (
		<Pressable onPress={onPress} onLongPress={onHold} disabled={isDisabled}>
			<Box backgroundColor= 
				{isDisabled ? "primary_dark" : "primary"} 
				paddingVertical="1" 
				borderRadius={borderRadiius ? borderRadiius : "roundedBigger"}>
					
				<Text variant={fontSize ? fontSize:"text16"}
				 fontWeight="700" 
				 color="secondary_light" 
				 textAlign="center" >{label}</Text>
			</Box>
		</Pressable>
		
	)
}

export default Button

const Style = StyleSheet.create({})