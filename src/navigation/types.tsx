import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs"
import { CompositeNavigationProp, CompositeScreenProps, NavigatorScreenParams } from "@react-navigation/native"
import { NativeStackNavigationProp } from "@react-navigation/native-stack"
import React from "react"

export type TabsParamList = {
	AvgScreen: undefined,
	MeasureScreen: {userId:number},
}

export type AuthStackParamList = {
	AuthStackScreen: undefined,
	AuthSignInScreen: undefined,
	AuthSignUpScreen: undefined,
	AuthTabsScreen: NavigatorScreenParams<TabsParamList>,
}
export type WelcomeNavigationType<RouteName extends keyof AuthStackParamList> = NativeStackNavigationProp<AuthStackParamList,RouteName>
declare global {
	namespace ReactNavigation{
		interface RootParamList extends AuthStackParamList {}
	}
}