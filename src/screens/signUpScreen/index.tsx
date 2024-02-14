import { Button, StyleSheet, View } from 'react-native'
import React from 'react'
import { Box, Text } from '../../components/theme'
import { useNavigation } from '@react-navigation/native'
import { AuthScreenNavType } from '../../navigation/types'
import { colors } from '../../components/theme/colors'
import SafeAreaWrapper from '../../components/safeArea'

const SignUpScreen = () => {
	const navigation = useNavigation<AuthScreenNavType<"SignUp">>()
	const navigatoToSignIn = () => {
		navigation.navigate("SignIn")
	}
  return (
	<SafeAreaWrapper>
		<Box>
			<Text>SignUpScreen</Text>
			<Button color={colors.primary} title='Go to sign up' onPress={navigatoToSignIn}></Button>
		</Box>
	</SafeAreaWrapper>
  )
}

export default SignUpScreen