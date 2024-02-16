import React from 'react'
import { Box, Text } from '../../components/theme'
import { useNavigation } from '@react-navigation/native'
import { AuthScreenNavType } from '../../navigation/types'
import SafeAreaWrapper from '../../components/safeArea'
import Input from 'src/components/input'
import Button from 'src/components/button'
import { Pressable } from 'react-native'
import PhoneInput from 'src/components/phoneInput'
import Dropdown from 'src/components/dropdown'

const SignInScreen = () => {
	const navigation = useNavigation<AuthScreenNavType<"SignIn">>()
	const navigatoToSignUp = () => {
		navigation.navigate("SignUp")
	}
	return (
		<SafeAreaWrapper>
			<Box flex={1} backgroundColor='secondary_light'>
				<Box marginHorizontal='4' marginVertical='9'>
					<Text variant='text16' fontWeight='500'>Добро пожаловать!</Text>
					<Text variant='text20' fontWeight='700' marginBottom='5'>Авторизоваться</Text>
					<Input label='Email' shouldBeHidden={false}></Input>

					<Box marginBottom='5'/>
					<Input label='Password' shouldBeHidden={true}/>
					<Box marginBottom='5'/>

					<Button label='Авторизоваться' onPress={() => null}/>
				
					<Box marginBottom='5'/>
						<Pressable onPress={navigatoToSignUp}>
							<Text textAlign='right' paddingRight='1' color='primary_dark'>Создать аккаунт?</Text>
						</Pressable>
					<Box marginBottom='5'/>
				</Box>
			</Box>
		</SafeAreaWrapper>
	  )
}

export default SignInScreen