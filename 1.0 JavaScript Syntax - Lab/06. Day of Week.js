function dayOfWeek(day) {
  const calendar = {
    'Monday': 1,
    'Tuesday': 2,
    'Wednesday': 3,
    'Thursday': 4,
    'Friday': 5,
    'Saturday': 6,
    'Sunday': 7,
  }

  return calendar.hasOwnProperty(day) ? calendar[day] : 'error'
}

// console.log(dayOfWeek('Monday'))
// console.log(dayOfWeek(1))