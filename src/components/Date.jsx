export default function date() {
  function greet(name) {
    const date = new Date()
    const getHour = date.getHours()
    let timeOftheDay
    if (getHour >= 4 && getHour <= 11) {
      timeOftheDay = 'Morning'
    }
    else if (getHour >= 12 && getHour <= 16) {
      timeOftheDay = 'afternoon'
    }
    else if (getHour >= 17 && getHour <= 19) {
      timeOftheDay = 'evening'
    }
    else if (getHour >= 20 && getHour <= 3) {
      timeOftheDay = 'night'
    }
    return `good ${timeOftheDay}, ${name} !`
  }
  return (
    <>
      {greet(`juli`)}
    </>
  )
}