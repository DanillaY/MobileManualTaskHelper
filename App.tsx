import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { ThemeProvider } from '@shopify/restyle';
import theme, { Text } from './src/components/theme';
import Navigation from './src/navigation';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function App() {
  return (
	<ThemeProvider theme={theme}>
		<SafeAreaProvider>
			<Navigation/>
			<StatusBar translucent/>
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
