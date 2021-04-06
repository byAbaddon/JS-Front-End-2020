function aggregateElements(arg) {
  let sum = arg.reduce((a, b) => a + b)
  let inverseSum = arg.map(el => 1 / el).reduce((a, b) => b + a)
  let concat = arg.join('')

  return `${sum}\n${inverseSum}\n${concat}`
}

// console.log(aggregateElements([1, 2, 3]))
// console.log(aggregateElements([2, 4, 8, 16]))