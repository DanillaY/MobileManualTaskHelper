import { Dimensions, TextInput, TextInputProps } from "react-native"
import React, { useState } from 'react'
import theme, { Box, Text } from "./theme"
import usePhoneStore from "src/store/phoneStore"

type InputProps = {
	label : string
	error?: undefined
	onPhoneChange?: () => void
	onCodeChange?: () => void
} & TextInputProps

const PhoneInput = ({label,error}:InputProps) => {

	const onChangeCode = usePhoneStore((state) => state.onChangeCode)
	const onChangePhone = usePhoneStore((state) => state.onChangePhone)

  return (
	<Box flexDirection='column'>
	  <Text variant='text16' fontWeight='600' marginBottom='0.5'>{label}</Text>
	  <Box flexDirection="row" borderWidth={2} borderColor="primary_dark" style={{borderRadius: theme.spacing[7]}}>
		<TextInput keyboardType="numeric" defaultValue="+" onChangeText= {(text) =>onChangeCode(text)} style={
			{
				borderRightColor: theme.colors.primary_dark,
				borderLeftColor: theme.colors.transparent,
				borderBottomColor: theme.colors.transparent,
				borderTopColor: theme.colors.transparent,
				paddingLeft: 15,
				fontSize:16,
				color:theme.colors.secondary,
				justifyContent:"center",
				width: Dimensions.get('window').width / 6.5,
				height : Dimensions.get('window').height / 16.8,
				borderWidth:1.75,
			}
		}/>
		<TextInput keyboardType="numeric" onChangeText={(text) =>onChangePhone(text)} style={
			{
				flex:1,
				paddingVertical:13,
				padding: 23,
				fontSize: 16,
				color: theme.colors.secondary
				}
			} placeholder={label}/>
	  </Box>
	</Box>
  )
}

export default PhoneInput
