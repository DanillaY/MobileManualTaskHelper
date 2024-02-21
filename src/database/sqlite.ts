import * as FileSystem from 'expo-file-system';
import * as SQLite from 'expo-sqlite/next';
import { Asset } from 'expo-asset';
import { useState } from 'react';
import useUserStore from 'src/store/userStore';


export interface UserProps {
	email:string, 
	gender:string,
	password:string,
	phoneNumber:string,
	timePeriodID?: number,
}
export interface TimePeriodsProps {
	periods: string
}
export interface TableProps {
	table:string,
	userProp?: UserProps,
	periodsProp?: TimePeriodsProps,
} 

export const test = async (email:string,password:string) => {
	const setExist = useUserStore((state) => state.setExist)
	const db = await SQLite.openDatabaseAsync('appUser.db')
	
	console.log("OUTPUT: "+email+" "+ password)
	const list:UserProps | null = await db.getFirstAsync("SELECT * FROM users WHERE email = ? AND password = ?",email,password )
	//const list = await db.getFirstAsync("SELECT * FROM users WHERE email = ? AND password = ?",email,password )
	//const allRows = await db.getAllAsync('SELECT * FROM users');
	//console.log(allRows)

	 setExist(list === null)
	
	//const result = await db.runAsync('UPDATE users SET usersTimeperiodsID = ? WHERE id = ?', 1, 1)

	//const result = await db.runAsync('INSERT INTO usersTimeperiods(userID,timeperiodID) VALUES(?,?);',1,1)
	//const result = await db.runAsync('INSERT INTO users(email,gender,password,phoneNumber) VALUES(?,?,?,?);', 'test@gmail.ru', "Другое","123","88005553535");
	//console.log(result.changes)
}



/* SAVED IN CASE ASYNC WONT WORK
export const ExecuteSQLCommand = (command:string, params: any[]): any[] => {
	const db = SQLite.openDatabase('appUser.db')
	
	  db.transaction(tx => {
		tx.executeSql("CREATE TABLE IF NOT EXISTS timePeriods (id INTEGER,timePeriod	DATE,PRIMARY KEY(id AUTOINCREMENT));")
		tx.executeSql("CREATE TABLE IF NOT EXISTS users (id	INTEGER UNIQUE,email	TEXT,gender	TEXT,password	TEXT,phoneNumber	TEXT,usersTimeperiodsID	INTEGER,PRIMARY KEY(id AUTOINCREMENT),FOREIGN KEY(usersTimeperiodsID) REFERENCES usersTimeperiods(id));")
		tx.executeSql("CREATE TABLE IF NOT EXISTS usersTimeperiods (id	INTEGER,userID	INTEGER,timeperiodID	INTEGER,FOREIGN KEY(timeperiodID) REFERENCES timePeriods(id),FOREIGN KEY(userID) REFERENCES users(id),PRIMARY KEY(id AUTOINCREMENT));")
		tx.executeSql(command,params,(tx,result) => 
		{ setVal(result.rows._array) })
	},(error) => {
		if(error){
			console.log(error)
		}
	},() => console.log("SUCCESS!!"))
	return val
}

export const GetAllFromTable = ({table}:TableProps) => {
	ExecuteSQLCommand(`SELECT * FROM ${table}`,[])
}

export const InsertIntoUsers = (prop:TableProps) => {
	console.log(
		ExecuteSQLCommand(`INSERT INTO users(email,gender,password,phoneNumber) VALUES(?,?,?,?);`,
			[prop.userProp!.email,prop.userProp!.gender,prop.userProp!.password,prop.userProp!.phoneNumber]
		))
}

export const InsertIntoTimePeriods = (prop:TableProps) => {
	console.log(
			ExecuteSQLCommand(`INSERT INTO timePeriods(timePeriod) VALUES(?);`,
			[prop.periodsProp!.periods]
		))
}
*/