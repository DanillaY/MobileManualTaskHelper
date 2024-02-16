import { create } from "zustand"

type DropdownStore = {
	selected: string
	setSelected: (selected: string) => void
}

const useDropdownStore = create<DropdownStore>((set,get) =>({
	selected: "",
	setSelected(selected) {
		set(() => ({selected:selected}))
	},
}))

export default useDropdownStore