import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { RootBottomParamlist, RootBottomTab } from "./types";
import React from 'react'
import HomeStackNavigator from "./homeStackNavigator";
import PredictionScreen from "../screens/predictionScreen";
import { Ionicons } from '@expo/vector-icons';
import { colors } from "../components/theme/colors";
import { useTheme } from "@shopify/restyle";

const Tab = createBottomTabNavigator<RootBottomTab>()


const BottomTabNavigator = () => {
	const theme = useTheme()
  return (
	<Tab.Navigator screenOptions={({ route }) => ({
		headerShown: false,
		tabBarActiveTintColor: theme.colors.secondary_light,
		tabBarInactiveTintColor: theme.colors.primary_dark,
		tabBarStyle: {
		  paddingHorizontal: 5,
		  paddingTop: 0,
		  backgroundColor: theme.colors.secondary,
		  position: 'absolute',
		  borderTopWidth: 0,
	  },
	  tabBarLabelStyle: {
        fontSize: 14,
      },
	})}>
		<Tab.Screen name="HomeMenu" component={HomeStackNavigator} 
		options={() => ({title: "Home", headerShown: false, tabBarIcon: ({size}) => (<Ionicons name="home" size={24} color={theme.colors.primary_dark} />)})}/>
		<Tab.Screen name="PredictedAvgMenu" component={PredictionScreen} 
		/* BUS CLOCK options={() => ({title: "Home", headerShown: false, tabBarIcon: ({size}) => (<MaterialCommunityIcons name="bus-clock" size={24} color={theme.colors.primary_dark} />)})}/>*/
		options={() => ({title: "Prediction", headerShown: false, tabBarIcon: ({size}) => (<Ionicons name="bar-chart" size={24} color={theme.colors.primary_dark} />)})}/>
	</Tab.Navigator>
  )
}
export default BottomTabNavigator
