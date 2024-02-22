import * as FileSystem from 'expo-file-system';
import * as SQLite from 'expo-sqlite';
import { Asset } from 'expo-asset';
import { useState } from 'react';
import useUserStore from 'src/store/userStore';


export const InitDatabase = () => {
	
	const db = SQLite.openDatabase('appUser.db')
	
	db.transaction(tx => {
		tx.executeSql("CREATE TABLE IF NOT EXISTS timePeriods (id INTEGER,timePeriod	DATE,PRIMARY KEY(id AUTOINCREMENT));")
		tx.executeSql("CREATE TABLE IF NOT EXISTS users (id	INTEGER UNIQUE,email	TEXT,gender	TEXT,password	TEXT,phoneNumber	TEXT,usersTimeperiodsID	INTEGER,PRIMARY KEY(id AUTOINCREMENT),FOREIGN KEY(usersTimeperiodsID) REFERENCES usersTimeperiods(id));")
		tx.executeSql("CREATE TABLE IF NOT EXISTS usersTimeperiods (id	INTEGER,userID	INTEGER,timeperiodID	INTEGER,FOREIGN KEY(timeperiodID) REFERENCES timePeriods(id),FOREIGN KEY(userID) REFERENCES users(id),PRIMARY KEY(id AUTOINCREMENT));")
	},(error) => {
		if(error){
			console.log(error)
		}
	},
	() => console.log("Database has been initialized"))
}
/*
SELECT users.email, timePeriods.timePeriod
FROM users
INNER JOIN usersTimeperiods ON usersTimeperiods.userID = users.id
INNER JOIN timePeriods ON usersTimeperiods.timeperiodID = timePeriods.id 
*/