import { create } from "zustand"

type PhoneStore = {
	code: string
	phone: string
	onChangeCode: (code: string) => void
	onChangePhone: (phone: string) => void
}

const usePhoneStore = create<PhoneStore>((set,get) =>({
	code:"",
	phone:"",
	onChangeCode(code: string) {
		set(() => ({code:code}))
	},
	onChangePhone(phone: string) {
		set(() => ({phone: phone}))
	},
}))

export default usePhoneStore