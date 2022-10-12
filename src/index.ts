/**
 *
 * The run calculator
 *
 * By:      Devin Jhu
 * Version: 1.0
 * Since:   2022-10-11
 */

import promptSync from 'prompt-sync'

// paramaters for my runCalculation function
/**
 * This function finds the run in the userInput
 *
 * @param {string} userWord is the userInput.
 * @returns {number} maxAmount max charactor in string.
 */
function runCalculation(userWord: string): number {
  let maxAmount = 0
  let count = 0

  // This function is where the max run is calculated
  // https://www.javascripttutorial.net/es6/javascript-arrow-function/
  userInput.split('').forEach((value) => {
    const charCount = userInput.split(value).length - 1
    if (count < charCount) {
      count = charCount
      maxAmount = count
    }
  })
  return maxAmount
}
const prompt = promptSync()

console.log('This program will find the run in a string ex. xyyz run=2')

// user inputs string
const userInput = prompt('Enter string: ')

// input passed to function
const userWord = userInput

// this is the max charactor in the string
const maxAmount = runCalculation(userWord)

// output
console.log(`The highest run is ${maxAmount}!`)
console.log('\nDone!')
