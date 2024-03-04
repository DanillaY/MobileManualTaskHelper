import { StyleSheet, View } from 'react-native'
import React, { useEffect } from 'react'
import theme, { Box, Text } from '../../components/theme'
import SafeAreaWrapper from '../../components/safeArea'
import { useRoute } from '@react-navigation/native'
import { CalculateTime } from './calculateTime'
import useClockStore from 'src/store/clockStore'
import Button from 'src/components/button'
import axios from 'axios'
import { AUTH_IP, AUTH_PORT } from '@env'

type PredicProp = { userId: number}

const PredictionScreen = () => {
	const {seconds,insertedTimePeriodId ,timerArray,interval , setSeconds,setTimer,setinsertedTimePeriodId, setIntervalTime, setClear} = useClockStore()

	const route = useRoute()
	const userId = route.params as PredicProp
	
	const AddTimePeriod = async (date:string) => {

		if(date != "" ){
			const res = await axios.post("http://"+ AUTH_IP +":"+ AUTH_PORT+"/timeperiods/createTimeperiod",
			{ Date:date})
			return res.data as number
		}
		return 0
	}
	const AssignTimepreiodToUser = async (timeperiodId:number) => {
		const res = await axios.post("http://"+ AUTH_IP +":"+ AUTH_PORT+"/timeperiods/assignTimeperiodToUser",
		{ userid:userId.userId, timeid: timeperiodId})
		console.log(res.data)
	}

	useEffect(() => {
		let timeArray:(string|number)[] = CalculateTime(seconds)
		setTimer(timeArray)
	},[seconds])

	const onStartCount = () => {
		let interval:any = setInterval(() => {
			setSeconds(seconds)
		},1000)
		setIntervalTime(interval)
	}

  return (
	<SafeAreaWrapper>
		<Box flex={1} backgroundColor='secondary_light' justifyContent='center' alignItems='center'>
			
			<Box flexDirection='row'>
				<Text variant={'text48'}>{timerArray[0]}</Text>
				<Text variant={'text48'} marginBottom='0.3'>:</Text>
				<Text variant={'text48'} >{timerArray[1]}</Text>
				<Text variant={'text48'} marginBottom='0.3'>:</Text>
				<Text variant={'text48'}>{timerArray[2]}</Text>
			</Box>

			<Box style={{gap:theme.spacing[2],marginTop:theme.spacing[5]}}>
				<Button label='Начать' borderRadiius='roundedNormal' onPress={onStartCount}/>
				<Button label='Стоп' borderRadiius='roundedNormal' onPress={() => clearInterval(interval)}/>
				<Button label='Перезапустить' borderRadiius='roundedNormal' onPress={() => {clearInterval(interval); setClear()}}/>
				<Button label='Отправить в анализ' 
				fontSize='text16' 
				borderRadiius='roundedNormal' 
				onPress={() => {
					AddTimePeriod(timerArray[3]+":"+timerArray[4]+":"+timerArray[5])
					.then((id:number) => id != 0 ? AssignTimepreiodToUser(id) : {})
					}}/>
			</Box>

		</Box>
	</SafeAreaWrapper>
  )
}

export default PredictionScreen