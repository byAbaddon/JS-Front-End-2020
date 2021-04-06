function stringLength(...arg) {
  let stringSum = arg.map(el => el.length).reduce((a, b) => a + b)
  return `${stringSum}\n${~~(stringSum / arg.length)}`
}

// console.log(stringLength('chocolate', 'ice cream', 'cake'))