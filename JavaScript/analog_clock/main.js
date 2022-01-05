function clock() {
  const date = new Date()

  const getHour = ((date.getHours() + 11) % 12 + 1)
  const getMin = date.getMinutes()
  const getSec = date.getSeconds()
  
  const hour = getHour * 30
  const min = getMin * 6
  const sec = getSec * 6
  
  document.querySelector('.clock__hands--hour').style.transform = `rotate(${hour}deg)`
  document.querySelector('.clock__hands--min').style.transform = `rotate(${min}deg)`
  document.querySelector('.clock__hands--sec').style.transform = `rotate(${sec}deg)`
}

setInterval(clock, 1000)