function productOfThreeNumbers(arg) {
  let isPositive = arg.filter(el => el < 0).length != 1
  return isPositive ? 'Positive' : 'Negative'
}

//console.log(productOfThreeNumbers([2, 3, -1]))
// console.log(productOfThreeNumbers([5, 4, 3]))