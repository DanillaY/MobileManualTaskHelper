import React from 'react'
import { Box, Text } from '../../components/theme'
import { useNavigation } from '@react-navigation/native'
import { AuthScreenNavType } from '../../navigation/types'
import { colors } from '../../components/theme/colors'
import SafeAreaWrapper from '../../components/safeArea'
import Input from 'src/components/input'
import Button from 'src/components/button'
import { Pressable } from 'react-native'

const SignUpScreen = () => {
	const navigation = useNavigation<AuthScreenNavType<"SignUp">>()
	const navigatoToSignIn = () => {
		navigation.navigate("SignIn")
	}
  return (
	<SafeAreaWrapper>
		<Box flex={1} backgroundColor='secondary_light'>
			<Box marginHorizontal='4' marginVertical='9'>
				<Text variant='text16' fontWeight='500'>Впервые в приложении?</Text>
				<Text variant='text20' fontWeight='700' marginBottom='5'>Зарегистрироваться</Text>
				<Input label='Email'></Input>
				<Box marginBottom='5'/>
					<Input label='Password'></Input>
				<Box marginBottom='2'/>
				<Pressable onPress={navigatoToSignIn}>
					<Text textAlign='right' paddingRight='1' color='primary_dark'>Уже есть аккаунт?</Text>
				</Pressable>
				<Box marginBottom='5'/>
				<Button label='Зарегистрироваться' onPress={() => null}></Button>
			</Box>
		</Box>
	</SafeAreaWrapper>
  )
}

export default SignUpScreen