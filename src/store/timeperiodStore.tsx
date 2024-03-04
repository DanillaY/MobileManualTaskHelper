import { create } from "zustand"

type Timeperiod = {
	id : number
	Date : string
	CreatedAt : Date
}
type GetResponse = {
	Predictedtime:string
	AssignedTimeperiods:Timeperiod[]
	setPredicted: (res: GetResponse) => void
	setTimeperiod: (res: GetResponse) => void
}

const useGetResponse = create<GetResponse>((set,get) =>({
	Predictedtime: "",
	AssignedTimeperiods: [{id:0,Date:"", CreatedAt: new Date('1995-12-17T03:24:00')}],
	setPredicted(res) {
		set(() => ({Predictedtime:res.Predictedtime}))
	},
	setTimeperiod(res) {
		set(() => ({AssignedTimeperiods:res.AssignedTimeperiods}))
	},
}))

export default useGetResponse