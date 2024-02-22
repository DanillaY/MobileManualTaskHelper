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
import { InitDatabase } from 'src/database/sqlite'

const SignUpScreen = () => {

	const navigation = useNavigation<WelcomeNavigationType<"AuthSignUpScreen">>()
	const { email,password,setEmail,setPassword} = useUserStore((state) => state)
	const {code,phone} = usePhoneStore((state) => state)
	const {selected} = useDropdownStore((state) => state)
	
	const genders = [
		{key:"1",value:"Мужской"},
		{key:"2",value:"Женский"},
		{key:"3",value:"Другое"}]

	const AddUser = (email:string,password:string,gender:string,phoneNumber:string) => {
		const db = SQLite.openDatabase('appUser.db')
		db.transaction(tx => {
			tx.executeSql("CREATE TABLE IF NOT EXISTS timePeriods (id INTEGER,timePeriod	DATE,PRIMARY KEY(id AUTOINCREMENT));")
			tx.executeSql("CREATE TABLE IF NOT EXISTS users (id	INTEGER UNIQUE,email	TEXT,gender	TEXT,password	TEXT,phoneNumber	TEXT,usersTimeperiodsID	INTEGER,PRIMARY KEY(id AUTOINCREMENT),FOREIGN KEY(usersTimeperiodsID) REFERENCES usersTimeperiods(id));")
			tx.executeSql("CREATE TABLE IF NOT EXISTS usersTimeperiods (id	INTEGER,userID	INTEGER,timeperiodID	INTEGER,FOREIGN KEY(timeperiodID) REFERENCES timePeriods(id),FOREIGN KEY(userID) REFERENCES users(id),PRIMARY KEY(id AUTOINCREMENT));")
			tx.executeSql("INSERT INTO users(email,gender,password,phoneNumber) VALUES(?,?,?,?)",
			[email,gender,password,phoneNumber],
			(tx,res) => 
			{ 
				navigation.navigate("AuthSignInScreen")
			},(tx,err) => {console.log(err); return false})
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

				<PhoneInput label='Phone'/>
				<Box marginBottom='5'/>

				<Dropdown label='Gender' data={genders}/>
				<Box marginBottom='2'/>
				
				<Pressable onPress={() => navigation.navigate("AuthSignInScreen")}>
					<Text textAlign='right' paddingRight='1' color='primary_dark'>Уже есть аккаунт?</Text>
				</Pressable>
				<Box marginBottom='5'/>
				<Button label='Зарегистрироваться' onPress={() => AddUser(email,password, selected, code + phone)}/>
			</Box>
		</Box>
	</SafeAreaWrapper>
  )
}

export default SignUpScreen