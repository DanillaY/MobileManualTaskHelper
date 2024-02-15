import React from "react"
import { Box, Text } from "../../components/theme"
import { Image } from "react-native"
import { useNavigation } from "@react-navigation/native"
import { AuthScreenNavType } from "../../navigation/types"
import SafeAreaWrapper from "../../components/safeArea"
import Button from "src/components/button"

const WelcomeScreen = () => {

	const navigation = useNavigation<AuthScreenNavType<"Welcome">>()
	const navigatoToSignIn = () => {
		navigation.navigate("SignIn")
	}
	const navigatoToSignUp = () => {
		navigation.navigate("SignUp")
	}
	return(
		<SafeAreaWrapper>
			<Box backgroundColor ="secondary_light" flex={1}>
				<Box alignItems="center" marginBottom="5" marginTop="3">
					<Image source={require('assets/appIcon.png')} style={{width:120,height:120,resizeMode:"cover",overflow:"hidden",borderRadius:60}}/>
				</Box>
				<Text variant="text24" fontWeight="700" textAlign="center">Manual Task Helper</Text>
				<Text variant="text20" fontWeight="500" textAlign="center">Ваш помощник в повседневных задачах</Text>
				<Box marginTop="2" marginHorizontal="5">
					<Button label="Оптимизировать свою жизнь" onPress={navigatoToSignUp}/>
				</Box>
				
			</Box>
		</SafeAreaWrapper>
	)
}
export default WelcomeScreen