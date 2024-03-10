import React, { useEffect, useLayoutEffect, useState } from 'react'
import theme, { Box, Text } from '../../components/theme'
import SafeAreaWrapper from '../../components/safeArea'
import axios from 'axios';
import { AUTH_IP, AUTH_PORT } from '@env';
import { Dimensions, FlatList } from 'react-native';
import { LineChart,} from "react-native-chart-kit";

type Timeperiod = {
	id : number
	Date : string
	DateInSeconds: number
	CreatedAt : Date
}

const MeasureScreen = () => {
	
	const id = window.userid
	const [predicted, setPredicted] = useState("")
	const [totalSeconds ,setSeconds] = useState(Array<number>)
	const [refreshing, setRefreshing] = useState(false)
	const [responseArray, setResponseArray] = useState(Array<Timeperiod>)

	const GetTimeDiff = async () => {
		if(id != 0) {
			await axios.get(
				"http://"+ AUTH_IP +":"+ AUTH_PORT+"/timeperiods/getDiffTimeByUserID",
			 	{params:{userid:id}})
			.then((res) => {

				if(res.data != "" ){

					setPredicted(res.data.Predictedtime as string)
					setResponseArray(res.data.AssignedTimeperiods as Timeperiod[])
					
					setSeconds(res.data.DateInSeconds as Array<number>)
				}
			})
		}
	}
	const CalculateMedianTimeperiod = () => {
		let tmpArray = [...totalSeconds].sort((a, b) => a - b);

		const half = Math.floor(tmpArray.length / 2);

		return (tmpArray.length % 2
		? tmpArray[half]
		: (tmpArray[half - 1] + tmpArray[half]) / 2
		)
	}

	const RefreshHandler = () => {
		setRefreshing(true)
		GetTimeDiff()
		setRefreshing(false)
	}

	  useEffect(() => {
		GetTimeDiff()
	  },[])

	const data =
	responseArray.length > 0 ?  
		[
		{id:"predicTime",value: 
		<Text variant='text18' fontWeight='700' paddingBottom='5'>Среднее значение между измерениями временных периодов: {predicted}</Text>},
		
		{id:"maxTime",value: 
		<Text variant='text18' fontWeight='700' paddingBottom='5'>Максимальный временной период: { totalSeconds.reduce((prev,curr) => {return prev > curr ?  prev : curr},0)} сек</Text>},

		{id:"minTime",value: 
		<Text variant='text18' fontWeight='700' paddingBottom='5'>Минимальный временной период: { totalSeconds.reduce((prev,curr) => {return prev < curr ?  prev : curr},totalSeconds[0])} сек</Text>},

		{id:"medianTime",value: 
		<Text variant='text18' fontWeight='700' paddingBottom='5'>Медиана временных периодов: { CalculateMedianTimeperiod()} сек</Text>},

		{id:"graph",value: 
		<LineChart
		data={{
			labels: responseArray.length > 0 ?
			responseArray.map((date) =>
			new Date(date.CreatedAt).toLocaleDateString()) : ["loading"],
			datasets: [
			{
				data: totalSeconds.length > 0 ? totalSeconds : [0]
			}
			]
		}}
		width={Dimensions.get("window").width - 50} // from react-native
		height={330}
		yAxisInterval={1} // optional, defaults to 1
		yAxisSuffix=' sec'
		chartConfig={{
			backgroundColor: theme.colors.secondary,
			backgroundGradientFrom: theme.colors.secondary,
			backgroundGradientTo: theme.colors.secondary,
			decimalPlaces:0,
			color: (opacity = 1) => theme.colors.primary_dark,
			labelColor: (opacity = 1) => theme.colors.primary_dark,
			propsForLabels: {
				fontSize: 14,
			},
			style: {
				borderRadius: 16,
				alignSelf:'center'
			},
			propsForDots: {
				r: totalSeconds.length,
				strokeWidth: "2",
				stroke: theme.colors.primary
			}
		}}
		bezier
		style={{
			borderRadius: 16,
			height:350
		}}
	/>}]: [ {id:"predicTime",value: <Text>Создайте временной период для анализа</Text>}]

  return (
	<SafeAreaWrapper>
		<Box 
		paddingTop='7'
		flex={1} 
		backgroundColor='secondary_light' 
		justifyContent='center'
		alignItems='center'>
			<FlatList 
			data={data} 
			renderItem={({item}) => 
			item.value} 
			refreshing={refreshing}
			onRefresh={RefreshHandler}
			/>
			
		</Box>
	</SafeAreaWrapper>
  )
}

export default MeasureScreen