

export const CalculateTime = (secondsTime: number) => {
	let hours= Math.floor(secondsTime /3600)
	let minutes = Math.floor((secondsTime - (hours * 3600)) / 60)
	let seconds = secondsTime - (hours * 3600) - (minutes * 60)

	let fromattHours = hours < 10 ? `0${hours}` : hours
	let fromattMinutes = minutes < 10 ? `0${minutes}` : minutes
	let fromattSeconds = seconds < 10 ? `0${seconds}` : seconds

	return [fromattHours,fromattMinutes,fromattSeconds]
}