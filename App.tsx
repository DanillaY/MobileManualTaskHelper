import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { ThemeProvider } from '@shopify/restyle';
import theme from './src/components/theme';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AuthStack from 'src/navigation/AuthStack';
import { InitDatabase } from 'src/database/sqlite';

const MainStack = createNativeStackNavigator()

export default function App() {
  return (
	<ThemeProvider theme={theme}>
		<SafeAreaProvider>
			<NavigationContainer>
				<MainStack.Navigator>
					<MainStack.Screen name='Main' options={{headerShown:false}} component={AuthStack}/>
				</MainStack.Navigator>
			</NavigationContainer>
		</SafeAreaProvider>
	</ThemeProvider>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.secondary_light,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
