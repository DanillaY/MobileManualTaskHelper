import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs"
import { NavigatorScreenParams, RouteProp } from "@react-navigation/native"
import { NativeStackNavigationProp, NativeStackScreenProps } from "@react-navigation/native-stack"
import React from "react"

export type TabsParamList = {
	MeasureScreen: {userId:number},
	PredictionScreen: {userId:number},
}

export type AuthStackParamList = {
	AuthStackScreen: undefined,
	AuthSignInScreen: undefined,
	AuthSignUpScreen: undefined,
	AuthTabsScreen: NavigatorScreenParams<TabsParamList>,
}
export type WelcomeNavigationType<RouteName extends keyof AuthStackParamList> = NativeStackNavigationProp<AuthStackParamList,RouteName>
export type UserNavigationType<RouteName extends keyof TabsParamList> = BottomTabNavigationProp<TabsParamList,RouteName>


declare global {
	namespace ReactNavigation{
		interface RootParamList extends AuthStackParamList {}
	}
}