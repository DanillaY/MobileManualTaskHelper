

export const CalculateTime = (secondsTime: number) :(string|number)[] => {
	let hours= Math.floor(secondsTime /3600)
	let minutes = Math.floor((secondsTime - (hours * 3600)) / 60)
	let seconds = secondsTime - (hours * 3600) - (minutes * 60)

	let formattHours = hours < 10 ? `0${hours}` : hours.toString()
	let formattMinutes = minutes < 10 ? `0${minutes}` : minutes.toString()
	let formattSeconds = seconds < 10 ? `0${seconds}` : seconds.toString()

	return [formattHours,formattMinutes,formattSeconds,hours ,minutes,seconds]
}