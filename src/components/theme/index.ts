import { createBox, createText, createTheme } from "@shopify/restyle";
import { colors } from "./colors";
import { textVariants } from "./text";

const theme = createTheme({
	colors: colors,
	spacing: {
		"0.5":12,
		"1":16,
		"2":20,
		"3":24,
		"4":28,
		"5":32,
		"6":36,
		"7":40,
		"8":44,
		"9":48,
		"10":52,
	},
	borderRadii: {
		none: 0,
		roundedNormal: 12,
		roundedBig: 18,
		roundedBigger: 24,
	},
	textVariants,
})

export type Theme =typeof theme
export const Box = createBox<Theme>()
export const Text = createText<Theme>()
export default theme