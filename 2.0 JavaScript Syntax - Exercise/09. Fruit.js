function fruit(...arg) {
  let [typeFruit, weight, money] = arg.map(el => isNaN(el) ? el : Number(el))
  weight /= 1000
  money *= weight
  return `I need $${money.toFixed(2)} to buy ${weight.toFixed(2)} kilograms ${typeFruit}.`
}

// console.log(fruit('orange', 2500, 1.80))