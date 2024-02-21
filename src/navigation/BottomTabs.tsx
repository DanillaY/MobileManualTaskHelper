import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import theme from "src/components/theme";
import MeasureScreen from "src/screens/measureScreen";
import PredictionScreen from "src/screens/predictionScreen";
import { Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

export function BottomTabs() {
  return (
    <Tab.Navigator screenOptions={ 
		{
			tabBarActiveTintColor: theme.colors.secondary_light,
			tabBarInactiveTintColor: theme.colors.primary_dark,
			tabBarLabelStyle:{fontSize:14},
			tabBarStyle:{backgroundColor:theme.colors.secondary}
			}}>
      <Tab.Screen name="Prediction" component={PredictionScreen} options={() => ({title: "Prediction", headerShown: false, tabBarIcon: () => (<Ionicons name="bar-chart" size={28} color={theme.colors.primary_dark} />)})}/>
      <Tab.Screen name="Measure" component={MeasureScreen} options={() => ({title: "Measure", headerShown: false, tabBarIcon: () => (<Ionicons name="stopwatch-outline" size={28} color={theme.colors.primary_dark} />)})}/>
    </Tab.Navigator>
  );
}