import React from "react"
import { Box, Text } from "../../components/theme"
import { Button } from "react-native"
import { useNavigation } from "@react-navigation/native"
import { AuthScreenNavType } from "../../navigation/types"
import { colors } from "../../components/theme/colors"
import SafeAreaWrapper from "../../components/safeArea"

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
			<Box>
				<Text>WELOCME!</Text>
				<Button color={colors.primary} title="Go to sign in " onPress={navigatoToSignIn}/>
				<Button color={colors.primary}  title="Go to sign up " onPress={navigatoToSignUp}/>
			</Box>
		</SafeAreaWrapper>
	)
}
export default WelcomeScreen