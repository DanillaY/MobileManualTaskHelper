import { NavigationContainer } from "@react-navigation/native"
import React, { useEffect } from "react"
import useUserStore from "../store/useStore"
import AuthStackNavigator from "./authStackNav"
import AppStackNavigator from "./appStackNavigator"


const Navigation = () => {

	const {user, updateUser} = useUserStore()
	console.log(user)
	useEffect(() => {
		updateUser(null)
		return () => {
		}
	},[])
	return(
		<NavigationContainer>
			{ user ? <AppStackNavigator/> : <AuthStackNavigator/> }
		</NavigationContainer>
	)
}
export default Navigation