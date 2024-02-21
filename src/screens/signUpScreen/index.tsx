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

const SignUpScreen = () => {
	//const navigation = useNavigation<AuthScreenNavType<"SignUp">>()
	const navigation = useNavigation<WelcomeNavigationType<"AuthSignUpScreen">>()
	const { email,password,phoneNumber,setEmail,setPassword,setGender,setPhone} = useUserStore((state) => state)


	const AddUser = (email:string,password:string,gender:string,phoneNumber:string) => {
		const db = SQLite.openDatabase('appUser.db')
		db.transaction(tx => {
			tx.executeSql("`INSERT INTO users(email,gender,password,phoneNumber) VALUES(?,?,?,?);",
			[email,gender,password,phoneNumber],
			(tx,res) => 
			{ 
				navigation.navigate("AuthSignInScreen")
			})
		})
	}
  return (
	<SafeAreaWrapper>
		<Box flex={1} backgroundColor='secondary_light'>
			<Box marginHorizontal='4' marginVertical='9'>
				<Text variant='text16' fontWeight='500'>Впервые в приложении?</Text>
				<Text variant='text20' fontWeight='700' marginBottom='5'>Зарегистрироваться</Text>
				<Input label='Email' onChangeText={setEmail} value={email}></Input>
				<Box marginBottom='5'/>
					<Input label='Password' shouldBeHidden={true} onChangeText={setPassword} value={password}></Input>
				<Box marginBottom='5'/>

				<PhoneInput label='Phone' onChangeText={setPhone} value={phoneNumber}/>
				<Box marginBottom='5'/>

				<Dropdown label='Gender' data={[{key:"1",value:"Мужской"},{key:"2",value:"Женский"},{key:"3",value:"Другое"}]}/>
				<Box marginBottom='2'/>
				
				<Pressable onPress={() => navigation.navigate("AuthSignInScreen")}>
					<Text textAlign='right' paddingRight='1' color='primary_dark'>Уже есть аккаунт?</Text>
				</Pressable>
				<Box marginBottom='5'/>
				<Button label='Зарегистрироваться' onPress={() => {}}></Button>
			</Box>
		</Box>
	</SafeAreaWrapper>
  )
}

export default SignUpScreen