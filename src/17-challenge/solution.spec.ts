import type { Equal, Expect } from 'type-testing'
import type { WhoWins } from './solution'

describe('Challenge 17: create a type definition to play rock paper scissors game', () => {
	it('Test 01', () => {
		type Actual = WhoWins<'👊🏻', '🖐🏾'>
		type Expected = 'win'
		type Test = Expect<Equal<Actual, Expected>>
	})

	it('Test 02', () => {
		type Actual = WhoWins<'👊🏻', '✌🏽'>
		type Expected = 'lose'
		type Test = Expect<Equal<Actual, Expected>>
	})

	it('Test 03', () => {
		type Actual = WhoWins<'👊🏻', '👊🏻'>
		type Expected = 'draw'
		type Test = Expect<Equal<Actual, Expected>>
	})

	it('Test 04', () => {
		type Actual = WhoWins<'🖐🏾', '👊🏻'>
		type Expected = 'lose'
		type Test = Expect<Equal<Actual, Expected>>
	})

	it('Test 05', () => {
		type Actual = WhoWins<'🖐🏾', '✌🏽'>
		type Expected = 'win'
		type Test = Expect<Equal<Actual, Expected>>
	})

	it('Test 06', () => {
		type Actual = WhoWins<'🖐🏾', '🖐🏾'>
		type Expected = 'draw'
		type Test = Expect<Equal<Actual, Expected>>
	})

	it('Test 07', () => {
		type Actual = WhoWins<'✌🏽', '👊🏻'>
		type Expected = 'win'
		type Test = Expect<Equal<Actual, Expected>>
	})

	it('Test 08', () => {
		type Actual = WhoWins<'✌🏽', '✌🏽'>
		type Expected = 'draw'
		type Test = Expect<Equal<Actual, Expected>>
	})

	it('Test 09', () => {
		type Actual = WhoWins<'✌🏽', '🖐🏾'>
		type Expected = 'lose'
		type Test = Expect<Equal<Actual, Expected>>
	})
})
