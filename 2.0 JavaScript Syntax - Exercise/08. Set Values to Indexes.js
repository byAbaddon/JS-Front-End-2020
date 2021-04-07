function setValuesToIndexes(arg) {
  let resultArr = new Array(+arg.shift()).fill(0)

  arg.forEach(el => {
    let [index, num] = el.split(' - ')
    resultArr.splice(index, 1, num)
  })

  return resultArr.join('\n')
}

// console.log(setValuesToIndexes([3, '0 - 5', '1 - 6', '2 - 7']))
// console.log(setValuesToIndexes([2, '0 - 5', '0 - 6', '0 - 7']))
// console.log(setValuesToIndexes([5, '0 - 3', '3 - -1', '4 - 2']))