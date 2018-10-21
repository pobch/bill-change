## Objective
Build a change calculator that when given an argument of dollars and cents, output the smallest quantity of bills and coins equal to the amount.
In the USA, we have the following types of currency…
- $100 dollar bill
- $50 dollar bill
- $20 dollar bill
- $10 dollar bill
- $5 dollar bill
- $1 dollar bill
- $.25 cents (quarter)
- $.10 cents (dime)
- $.05 cents (nickel)
- $.01 cents (penny)
## Example Output
If 1.00 was passed as an argument, the output would be “Your change is 1 1 dollar bill". The dollar being the largest type of currency available to make up 100 cents, which is also the smallest quantity of dollars and coins.
If .99 was passed as an argument, the output would be “Your change is 3 quarters, 2 dimes, and 4 pennies”
if 124.67 was passed as an argument, the output would be “Your change is 1 100 dollar bill, 1 20 dollar bill, 4 1 dollar bills, 2 quarters, 1 dime, 1 nickel, and 2 pennies.
## To install all dependencies
```
yarn install
```
## To start React app locally
```
yarn start
```
## Run the test
```
yarn test
```
## Build
```
yarn build
```