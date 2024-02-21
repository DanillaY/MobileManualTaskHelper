import React, { useEffect, useState } from 'react'
import theme, { Box, Text } from '../../components/theme'
import * as SQLite from 'expo-sqlite';
import { useNavigation } from '@react-navigation/native'
import SafeAreaWrapper from '../../components/safeArea'
import Input from 'src/components/input'
import Button from 'src/components/button'
import { Pressable } from 'react-native'
import useUserStore, { UserType } from 'src/store/userStore';
import { WelcomeNavigationType } from 'src/navigation/types';


const SignInScreen = () => {

	const navigation = useNavigation<WelcomeNavigationType<"AuthSignInScreen">>()

	const { ID, email,password,exist,setEmail,setPassword,setExist} = useUserStore((state) => state)

	const CheckUser= (email:string,password:string) => {
		const db = SQLite.openDatabase('appUser.db')
		db.transaction(tx => {
			tx.executeSql("SELECT * FROM users WHERE email = ? AND password = ? LIMIT 1",[email,password],
			(tx,res) => 
			{ setExist(res.rows.length === 1); console.log(res.rows._array[0].id)})
		})
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
					<Button label='Авторизоваться' onPress={exist === true ? () => {navigation.navigate("AuthTabsScreen",{screen:"MeasureScreen", params:{userId:ID} })}: () =>{CheckUser(email,password);console.log(exist)}}/>
				</Box>
			</Box>
		</SafeAreaWrapper>
	  )
}

export default SignInScreen