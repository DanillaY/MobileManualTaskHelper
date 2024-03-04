import React, { useEffect, useState } from 'react'
import theme, { Box, Text } from '../../components/theme'
import SafeAreaWrapper from '../../components/safeArea'
import axios from 'axios';
import { AUTH_IP, AUTH_PORT } from '@env';
import { Dimensions, FlatList } from 'react-native';
import { LineChart,} from "react-native-chart-kit";

type Timeperiod = {
	id : number
	Date : string
	CreatedAt : Date
}
type GetResponse = {
	Predictedtime:string
	AssignedTimeperiods:Timeperiod[]
}

const MeasureScreen = () => {
	
	const id = window.userid
	const [predicted, setPredicted] = useState("")
	const [refreshing, setRefreshing] = useState(false)
	const [responseArray, setResponseArray] = useState(Array<Timeperiod>)

	useEffect(() => {
		RefreshHandler();
	  }, []);

	const data = [
		{id:"predicTime",value: predicted},
		{id:"graph",value: 
		<LineChart
		data={{
			labels: ["January", "February", "March", "April", "May", "June"],
			datasets: [
			{
				data: [
				Math.random() * 100,
				Math.random() * 100,
				Math.random() * 100,
				Math.random() * 100,
				Math.random() * 100,
				Math.random() * 100
				]
			}
			]
		}}
		width={Dimensions.get("window").width - 50} // from react-native
		height={330}
		yAxisLabel="$"
		yAxisSuffix="k"
		yAxisInterval={1} // optional, defaults to 1
		chartConfig={{
			backgroundColor: theme.colors.secondary,
			backgroundGradientFrom: theme.colors.secondary,
			backgroundGradientTo: theme.colors.secondary,
			color: (opacity = 1) => theme.colors.primary_dark,
			labelColor: (opacity = 1) => theme.colors.primary_dark,
			propsForLabels: {
				fontSize: 14
			},
			style: {
			borderRadius: 16,
			alignSelf:'center'
			},
			propsForDots: {
			r: "6",
			strokeWidth: "2",
			stroke: theme.colors.primary
			}
		}}
		bezier
		style={{
			borderRadius: 16,
			height:350
		}}
		/>}
	]
	
	const GetTimeDiff = async () => {
		if(id != 0) {
			const res = await axios.get("http://"+ AUTH_IP +":"+ AUTH_PORT+"/timeperiods/getDiffTimeByUserID", {params:{userid:id}})
			setPredicted(res.data.Predictedtime as string)
			console.log(res.data.AssignedTimeperiods as Timeperiod[])
			setResponseArray(res.data.AssignedTimeperiods as Timeperiod[])
		}
	}

	const RefreshHandler = () => {
		setRefreshing(true)
		GetTimeDiff()
		setRefreshing(false)
	}
	
	
  return (
	<SafeAreaWrapper>
		<Box 
		paddingTop='7'
		flex={1} 
		backgroundColor='secondary_light' 
		justifyContent='center'
		alignItems='center'>
			<Text variant='text20' fontWeight='700'>Среднее значение между измерениями</Text>
			<FlatList 
			data={data} 
			renderItem={({item}) => 
			<Text textAlign='center' marginTop='6' variant='text36'>{item.value} </Text>} 
			refreshing={refreshing}
			onRefresh={RefreshHandler}
			/>
			
		</Box>
	</SafeAreaWrapper>
  )
}

export default MeasureScreen