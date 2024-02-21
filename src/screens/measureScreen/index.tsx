import React, { useEffect } from 'react'
import theme, { Box, Text } from '../../components/theme'
import SafeAreaWrapper from '../../components/safeArea'
import useUserStore from 'src/store/userStore'
import useClockStore from 'src/store/clockStore'
import { CalculateTime } from './calculateTime'
import Button from 'src/components/button'

const MeasureScreen = () => {
	const {seconds ,timerArray,interval , setSeconds,setTimer, setIntervalTime, setClear} = useClockStore()

	useEffect(() => {
		let timeArray = CalculateTime(seconds)
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
				<Button label='Отправить в анализ' fontSize='text16' borderRadiius='roundedNormal' onPress={() =>{}}/>
			</Box>

		</Box>
	</SafeAreaWrapper>
  )
}

export default MeasureScreen