import { create } from 'zustand'
import { combine } from 'zustand/middleware'


export type UserType = {
	ID: number,
	email:string,
	gender: string,
	password:string,
	phoneNumber:string,
	usersTimePeriodsId: number,
}

type Action = {
	setEmail: (email:string) => void,
	setGender: (gender:string) => void,
	setPassword: (pass:string) => void,
	setPhone: (phone:string) => void,
	setExist: (exist:boolean) => void,
}

type State = {
	ID: number,
	email:string,
	gender: string,
	password:string,
	phoneNumber:string,
	usersTimePeriodsId: number,
	exist: boolean,
}
  
const useUserStore = create<Action & State>((set) => ({
	ID:0,
	email: "",
	gender: "",
	password : "",
	phoneNumber:"",
	usersTimePeriodsId: 0,
	exist: false,
	setEmail: (email) => set(() => ({ email: email })),
	setGender: (gender:string) => set(() => ({ gender: gender })),
	setPassword: (pass) => set(() => ({ password: pass })),
	setPhone: (phone:string) => set(() => ({ phoneNumber: phone })),
	setExist: (exist:boolean) => set(() => ({exist:exist})),
	setID: (id:number) => set(() => ({ID:id})),
  }))

  export default useUserStore