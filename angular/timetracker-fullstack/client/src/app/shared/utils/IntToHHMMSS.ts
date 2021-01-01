export function IntToHHMMSS(dateNumb): string {
  console.log('dateNumb', dateNumb)
  // 3 600 000  = hour to milsec
  // 60 000     = min to milsec
  // 1000       = sec to milsec
  const hours = +(dateNumb / 3600000).toFixed(0)
  const minutes = +((dateNumb - hours * 3600000) / 60000).toFixed(0)
  const seconds = +((dateNumb - hours - minutes) / 1000).toFixed(0)

  return `${('0' + hours).slice(-2)}:${('0' + minutes).slice(-2)}:${('0' + seconds).slice(-2)}`
}
