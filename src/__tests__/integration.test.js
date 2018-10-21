import React from 'react'
import { mount } from 'enzyme'
import App from '../App'

let component

beforeEach(() => {
  component = mount(<App />)
})

afterEach(() => {
  component.unmount()
})

const test = (inputString, resultString) => {
  // input value
  component.find('input').simulate('change', {
    target: { value: inputString }
  })
  component.update()

  // display value
  expect(component.find('input').prop('value')).toEqual(inputString)

  // submit value
  component.find('form').simulate('submit')
  component.update()

  // result string
  expect(component.find('p').render().text()).toEqual(resultString)
}

it('deny a string value', () => {
  expect(component.find('input').prop('type')).toEqual('number')
})

it('deny a minus number, 0 and empty value', () => {
  expect(component.find('input').prop('required')).toBeTruthy()
  expect(component.find('input').prop('min')).toEqual('.01')
})

it('deny a number which is more than 2 decimal points', () => {
  expect(component.find('input').prop('step')).toEqual('.01')
})

it('can calculate a float number which is stored as binary by javascript', () => {
  test('0.29', '1 quarter, 4 pennies.')
  test('326.96', '3 100 dollar bills, 1 20 dollar bill, 1 5 dollar bill, 1 1 dollar bill, 3 quarters, 2 dimes, 1 penny.')
})

it('correctly display singular nouns', () => {
  test('186.41', '1 100 dollar bill, 1 50 dollar bill, 1 20 dollar bill, 1 10 dollar bill, 1 5 dollar bill, 1 1 dollar bill, 1 quarter, 1 dime, 1 nickel, 1 penny.')
})

it('correctly display plural nouns', () => {
  test('200', '2 100 dollar bills.')
  test('40', '2 20 dollar bills.')
  test('2', '2 1 dollar bills.')
  test('0.5', '2 quarters.')
  test('0.2', '2 dimes.')
  test('0.02', '2 pennies.')
})

it('correctly display some random numbers which is not properly formated', () => {
  test('004.88', '4 1 dollar bills, 3 quarters, 1 dime, 3 pennies.')
  test('88.', '1 50 dollar bill, 1 20 dollar bill, 1 10 dollar bill, 1 5 dollar bill, 3 1 dollar bills.')
  test('.23', '2 dimes, 3 pennies.')
})

it('correctly display properly formatted numbers', () => {
  test('2503.56', '25 100 dollar bills, 3 1 dollar bills, 2 quarters, 1 nickel, 1 penny.')
  test('98.99', '1 50 dollar bill, 2 20 dollar bills, 1 5 dollar bill, 3 1 dollar bills, 3 quarters, 2 dimes, 4 pennies.')
})
