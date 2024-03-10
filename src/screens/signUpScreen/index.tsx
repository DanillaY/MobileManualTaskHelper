import React from 'react'
import { Box, Text } from '../../components/theme'
import { useNavigation } from '@react-navigation/native'
import { colors } from '../../components/theme/colors'
import SafeAreaWrapper from '../../components/safeArea'
import Input from 'src/components/input'
import Button from 'src/components/button'
import * as SQLite from 'expo-sqlite';
import { Pressable } from 'react-native'
import Dropdown from 'src/components/dropdown'
import PhoneInput from 'src/components/phoneInput'
import { WelcomeNavigationType } from 'src/navigation/types'
import useUserStore from 'src/store/userStore'
import usePhoneStore from 'src/store/phoneStore'
import useDropdownStore from 'src/store/dropdownStore'
import axios from 'axios'
import { AUTH_IP, AUTH_PORT } from '@env'

const SignUpScreen = () => {

	const navigation = useNavigation<WelcomeNavigationType<"AuthSignUpScreen">>()
	const { email,password,setEmail,setPassword} = useUserStore((state) => state)
	const {code,phone} = usePhoneStore((state) => state)
	const {selected} = useDropdownStore((state) => state)
	
	const genders = [
		{key:"1",value:"Мужской"},
		{key:"2",value:"Женский"},
		{key:"3",value:"Другое"}]

	const RegisterUser = async (email:string,password:string,gender:string,phone:string) => {
		const res= await axios.post("http://"+AUTH_IP+":"+AUTH_PORT+"/user/createUser",
		{ Email:email,Password:password,Gender:gender,Phonenumber:phone})
		return Boolean(res.data)
	}

  return (
	<SafeAreaWrapper>
		<Box flex={1} backgroundColor='secondary_light'>
			<Box marginHorizontal='4' marginVertical='9'>
				<Text variant='text16' fontWeight='500'>Впервые в приложении?</Text>
				<Text variant='text20' fontWeight='700' marginBottom='5'>Зарегистрироваться</Text>
				<Input label='Email' onChangeText={setEmail} value={email}></Input>
				<Box marginBottom='3'/>
					<Input label='Password' shouldBeHidden={true} onChangeText={setPassword} value={password}></Input>
				<Box marginBottom='3'/>

				<PhoneInput label='Phone'/>
				<Box marginBottom='3'/>

				<Dropdown label='Gender' data={genders}/>
				<Box marginBottom='2'/>
				
				<Pressable onPress={() => navigation.navigate("AuthSignInScreen")}>
					<Text textAlign='right' paddingRight='1' color='primary_dark'>Уже есть аккаунт?</Text>
				</Pressable>
				<Box marginBottom='5'/>
				
				<Button label='Зарегистрироваться' onPress={
					() => RegisterUser(email,password, selected, code + phone)
					.then(() => navigation.navigate("AuthSignInScreen"))}
				/>
			</Box>
		</Box>
	</SafeAreaWrapper>
  )
}

export default SignUpScreen