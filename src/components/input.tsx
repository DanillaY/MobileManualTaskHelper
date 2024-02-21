import { StyleSheet, TextInput, TextInputProps } from 'react-native'
import React from 'react'
import theme, { Box, Text } from './theme'

type InputProps = {
	label : string
	error?: undefined
	onChangeText?: (arg:any) => void
	shouldBeHidden?: boolean
} & TextInputProps


const Input = ({label,shouldBeHidden,onChangeText,error}:InputProps) => {
  return (
	<Box flexDirection='column'>
	  <Text variant='text16' fontWeight='600' marginBottom='0.5'>{label}</Text>
	  <TextInput secureTextEntry={shouldBeHidden ? true : false} style={
		{
			paddingVertical:13,
			borderWidth: 2,
			borderColor: theme.colors.primary_dark,
			borderRadius: theme.spacing[7],
			padding: 23,
			fontSize: 16,
			color: theme.colors.secondary
			}
		} placeholder={label} onChangeText={(text) => onChangeText!(text)}/>
	</Box>
  )
}

export default Input