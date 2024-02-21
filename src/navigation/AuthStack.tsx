import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { AuthStackParamList } from "./types"
import WelcomeScreen from "src/screens/welcomeScreen"
import SignInScreen from "src/screens/signInScreen"
import SignUpScreen from "src/screens/signUpScreen"
import { BottomTabs } from "./BottomTabs"

const AuthStackNav = createNativeStackNavigator<AuthStackParamList>()


export default function AuthStack() {
  return (
	<AuthStackNav.Navigator>
		<AuthStackNav.Screen name='AuthStackScreen' component={WelcomeScreen} options={{headerShown:false}}/>
		<AuthStackNav.Screen name='AuthSignInScreen' component={SignInScreen} options={{headerShown:false}}/>
		<AuthStackNav.Screen name='AuthSignUpScreen' component={SignUpScreen} options={{headerShown:false}}/>
		<AuthStackNav.Screen name='AuthTabsScreen' component={BottomTabs} options={{headerShown:false}}/>
	</AuthStackNav.Navigator>
  )
}