import React, { useEffect, useState } from 'react'
import theme, { Box, Text } from '../../components/theme'
import * as SQLite from 'expo-sqlite';
import { useNavigation } from '@react-navigation/native'
import SafeAreaWrapper from '../../components/safeArea'
import Input from 'src/components/input'
import Button from 'src/components/button'
import { InteractionManager, Pressable } from 'react-native'
import useUserStore, { UserType } from 'src/store/userStore';
import { WelcomeNavigationType } from 'src/navigation/types';
import { AUTH_PORT,AUTH_IP } from '@env';
import axios from 'axios';

interface CheckUserResponse {
	exist:boolean
	userId:number
 }

const SignInScreen = () => {

	const navigation = useNavigation<WelcomeNavigationType<"AuthSignInScreen">>()
	const { ID, email,exist,password,setEmail,setPassword,setExist,setID} = useUserStore((state) => state)

	const CheckUser = async (email:string,password:string) => {
		const res = await axios.post("http://"+AUTH_IP+":"+AUTH_PORT+"/user/doesExist",
		{ Email:email,Password:password,Gender:"",Phonenumber:""})
		const json:CheckUserResponse = JSON.parse(JSON.stringify(res.data))
		
		return json
	}

	return (
		<SafeAreaWrapper>
			<Box flex={1} backgroundColor='secondary_light'>
				<Box marginHorizontal='4' marginVertical='9'>

					<Text variant='text16' fontWeight='500'>Добро пожаловать!</Text>
					<Text variant='text20' fontWeight='700' marginBottom='5'>Авторизоваться</Text>
					<Input label='Email' shouldBeHidden={false} onChangeText={setEmail} value={email}></Input>

					<Box marginBottom='5'/>
					<Input label='Password' shouldBeHidden={true} onChangeText={setPassword} value={password}/>

					<Box marginBottom='3'/>
						<Pressable onPress={() =>{navigation.navigate("AuthSignUpScreen")}}>
							<Text textAlign='right' paddingRight='1' color='primary_dark'>Создать аккаунт?</Text>
						</Pressable>

					<Box marginBottom='5'/>
					<Button label='Авторизоваться' onPress={() => 
					{ 
						CheckUser(email,password).then((res:CheckUserResponse) => {
							 if(res.exist == true) {
								window.userid = res.userId
								navigation.navigate("AuthTabsScreen",{ screen:"PredictionScreen", params:{userId:res.userId}})
							 }
						}) 
					}}/>
				</Box>
			</Box>
		</SafeAreaWrapper>
	  )
}

export default SignInScreen