import { createNativeStackNavigator } from "@react-navigation/native-stack"
import React from "react"
import {  HomeStackParamList } from "./types"
import HomeScreen from "../screens/homeScreen"
import PredictionScreen from "../screens/predictionScreen"

const NavStack = createNativeStackNavigator<HomeStackParamList>()

const HomeStackNavigator = () => {
	return(
		<NavStack.Navigator>
			<NavStack.Screen name="HomeStack" options={{headerShown: false}} component={HomeScreen}/>
			<NavStack.Screen name="PredictedAvgMenu" component={PredictionScreen}/>
		</NavStack.Navigator>
	)
}
export default HomeStackNavigator