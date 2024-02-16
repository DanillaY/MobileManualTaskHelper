import { create } from "zustand"
import { createJSONStorage, persist } from "zustand/middleware"
import AsyncStorage from "@react-native-async-storage/async-storage"

interface IUserGlobal {
	user: IAuthUser | null
	updateUser:(user:IAuthUser | null) => void
}
const useUserStore = create<IUserGlobal>()(
	persist((set,get) => ({
		user:null,
		updateUser:(user)=>{
			set({
				user,
			})
		}
	}),{
		name: "authorizedUserStore",
		storage: createJSONStorage(() => AsyncStorage)
	}
	)
)
export default useUserStore