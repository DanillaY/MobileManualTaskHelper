import { CompositeNavigationProp, CompositeScreenProps, NavigatorScreenParams } from "@react-navigation/native"
import { NativeStackNavigationProp } from "@react-navigation/native-stack"
import React from "react"

export type AuthStackParamLIst = {
	Welcome: undefined
	SignIn: undefined
	SignUp: undefined
}

export type HomeStackParamList = {
	HomeStack: undefined
	PredictedAvgMenu: undefined
}
export type PredictedStackParamList = {
	CalibrationTab: undefined
	PredictedAvgMenu: undefined
}

export type RootBottomParamlist = {
	AppStack: NavigatorScreenParams<AppStackParamList>
	AuthStack: NavigatorScreenParams<AuthStackParamLIst>
}

export type RootBottomTab = {
	HomeMenu: NavigatorScreenParams<HomeStackParamList>
	CalibrationTab: undefined
	PredictedAvgMenu: NavigatorScreenParams<PredictedStackParamList>
}

export type AppStackParamList = {
	Root: NavigatorScreenParams<RootBottomTab>
	Settings: undefined
}
export type AuthScreenNavType<RouteName extends keyof AuthStackParamLIst> =
CompositeNavigationProp<
NativeStackNavigationProp<AuthStackParamLIst,RouteName>,
NativeStackNavigationProp<AppStackParamList,"Root">
>

declare global {
	namespace ReactNavigation{
		interface RootParamList extends RootBottomParamlist {}
	}
}