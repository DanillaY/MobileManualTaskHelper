import { createNativeStackNavigator } from "@react-navigation/native-stack"
import React from "react"
import { AuthStackParamLIst } from "./types"
import WelcomeScreen from "../screens/welcomeScreen"
import SignInScreen from "../screens/signInScreen"
import SignUpScreen from "../screens/signUpScreen"

const NavStack = createNativeStackNavigator<AuthStackParamLIst>()

const AuthStackNavigator = () => {
	return(
		<NavStack.Navigator>
			<NavStack.Screen name="Welcome" component={WelcomeScreen}/>
			<NavStack.Screen name="SignIn" component={SignInScreen}/>
			<NavStack.Screen name="SignUp" component={SignUpScreen}/>
		</NavStack.Navigator>
	)
}
export default AuthStackNavigator