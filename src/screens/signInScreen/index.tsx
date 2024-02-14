import { Button } from 'react-native'
import React from 'react'
import { Box, Text } from '../../components/theme'
import { useNavigation } from '@react-navigation/native'
import { AuthScreenNavType } from '../../navigation/types'
import { colors } from '../../components/theme/colors'
import SafeAreaWrapper from '../../components/safeArea'

const SignInScreen = () => {
	const navigation = useNavigation<AuthScreenNavType<"SignIn">>()
	const navigatoToSignUp = () => {
		navigation.navigate("SignUp")
	}
  return (
	<SafeAreaWrapper>
		<Box>
	  		<Text>SignInScreen</Text>
	  		<Button color={colors.primary} title='Go to sign up' onPress={navigatoToSignUp}></Button>
		</Box>
	</SafeAreaWrapper>
  )
}

export default SignInScreen