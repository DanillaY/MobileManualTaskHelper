import React from 'react'
import theme, { Box, Text } from './theme'
import { SelectList } from 'react-native-dropdown-select-list'
import useDropdownStore from 'src/store/dropdownStore'
import { Dimensions } from 'react-native'

type DropdownProps = {
	label: string
	data: object[]
}

const Dropdown = ({data,label}:DropdownProps) => {
	const {selected, setSelected} = useDropdownStore()
  return (
	<Box flexDirection='column'>
	  <Text variant='text16' marginBottom='0.5'>{label}</Text>
	  <SelectList boxStyles={{
			alignContent:'center',
			paddingTop: Dimensions.get('window').height / 50,
			height: Dimensions.get('window').height / 14,
			borderRadius:theme.spacing[7],
			borderWidth: 2,
			borderColor: theme.colors.primary_dark,
		}}
		inputStyles={{
			fontSize:theme.textVariants.text16.fontSize,
			color:theme.colors.secondary,
		}}
		dropdownTextStyles={{
			fontSize:theme.textVariants.text16.fontSize,
			color:theme.colors.secondary,
		}}
		 data={data} setSelected={setSelected}></SelectList>
	</Box>
  )
}

export default Dropdown