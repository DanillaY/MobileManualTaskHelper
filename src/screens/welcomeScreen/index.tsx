import React, { useState } from "react"
import { Box, Text } from "../../components/theme"
import { Image } from "react-native"
import { useNavigation } from "@react-navigation/native"
import SafeAreaWrapper from "../../components/safeArea"
import Button from "src/components/button"
import { WelcomeNavigationType } from "src/navigation/types"

const WelcomeScreen = () => {

	const navigation = useNavigation<WelcomeNavigationType<"AuthStackScreen">>()

	return(
		<SafeAreaWrapper>
			<Box backgroundColor ="secondary_light" flex={1}>
				<Box alignItems="center" marginBottom="5" marginTop="3">
					<Image source={require('assets/appIcon.png')} style={{width:120,height:120,resizeMode:"cover",overflow:"hidden",borderRadius:60}}/>
				</Box>
				<Text variant="text24" fontWeight="700" textAlign="center">Manual Task Helper</Text>
				<Text variant="text20" fontWeight="500" textAlign="center">Ваш помощник в повседневных задачах</Text>
				<Box marginTop="2" marginHorizontal="5">
					<Button label="Оптимизировать свою жизнь" onPress={() => navigation.navigate("AuthSignUpScreen")}/>
				</Box>
			</Box>
		</SafeAreaWrapper>
	)
}
export default WelcomeScreen