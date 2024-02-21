import { create } from "zustand"

type ClockStore = {
	seconds:number
	timerArray: Array<number|string>
	interval: any
	setSeconds: (seconds:number) => void
	setTimer: (arr: Array<number|string>) => void
	setIntervalTime: (interval:number) => void
	setClear: () => void
}

const useClockStore = create<ClockStore>((set) =>({
	seconds: 0,
	timerArray:[],
	interval:[],
	setSeconds:  () => set((prev) => ({ seconds:  prev.seconds + 1 })),
	setTimer: (arr) => set(() => ({timerArray:arr})),
	setIntervalTime: (interval) => set(() => ({interval:interval})),
	setClear: () => set(() => ({seconds:0}))
}))

export default useClockStore