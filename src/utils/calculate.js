// All US bill type as an array of [ <money amount in cents>, <singular unit>, <plural unit> ]
const billTypes = [
  [10000, '100 dollar bill', '100 dollar bills'],
  [5000, '50 dollar bill', '50 dollar bills'],
  [2000, '20 dollar bill', '20 dollar bills'],
  [1000, '10 dollar bill', '10 dollar bills'],
  [500, '5 dollar bill', '5 dollar bills'],
  [100, '1 dollar bill', '1 dollar bills'],
  [25, 'quarter', 'quarters'],
  [10, 'dime', 'dimes'],
  [5, 'nickel', 'nickels'],
  [1, 'penny', 'pennies']
]

// calculate the bill change
export const calculate = cents => {
  let centsAmount = +cents
  
  if (!isFinite(centsAmount)) {
    return 'Error: input value is not a number'
  }

  if (centsAmount <= 0) {
    return 'Please enter the value which is greater than 0'
  }

  let resultString = ''

  for(let type of billTypes) {
    const [typeAmount, typeString, typeStringPlural] = type
    const numOfBillType = Math.floor(centsAmount / typeAmount)
    const remainder = centsAmount % typeAmount
    
    if (remainder) {
      // if there is remainder left, we have to continue the loop
      if (numOfBillType) {
        resultString = resultString + `${numOfBillType} ${numOfBillType > 1 ? typeStringPlural : typeString}, `
        centsAmount = centsAmount - (numOfBillType * typeAmount)
      }
      continue
    }

    // No remainder left, end the loop
    if (numOfBillType) {
      resultString = resultString + `${numOfBillType} ${numOfBillType > 1 ? typeStringPlural : typeString}.`
    }
    break
  }

  return resultString
}
