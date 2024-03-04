import { create } from "zustand"

type ClockStore = {
	seconds:number
	timerArray: Array<string|number>
	interval: any
	insertedTimePeriodId: number
	setSeconds: (seconds:number) => void
	setTimer: (arr: Array<string|number>) => void
	setIntervalTime: (interval:number) => void
	setinsertedTimePeriodId: (intervalId:number) => void
	setClear: () => void
}

const useClockStore = create<ClockStore>((set) =>({
	seconds: 0,
	timerArray:[],
	interval:[],
	insertedTimePeriodId:0,
	setSeconds:  () => set((prev) => ({ seconds:  prev.seconds + 1 })),
	setTimer: (arr) => set(() => ({timerArray:arr})),
	setIntervalTime: (interval) => set(() => ({interval:interval})),
	setClear: () => set(() => ({seconds:0})),
	setinsertedTimePeriodId: (intervalId) => set(() =>({insertedTimePeriodId:intervalId}))
}))

export default useClockStore