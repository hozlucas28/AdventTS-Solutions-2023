import type { Equal, Expect } from 'type-testing'
import type { FindSanta } from './solution'

describe('Challenge 12: find index where Santa is', () => {
	it('Test 01', () => {
		type Forest = ['🎅🏼', '🎄', '🎄', '🎄']

		type Actual = FindSanta<Forest>
		type Expected = 0

		type Test = Expect<Equal<Actual, Expected>>
	})

	it('Test 02', () => {
		type Forest = ['🎄', '🎅🏼', '🎄', '🎄', '🎄', '🎄']

		type Actual = FindSanta<Forest>
		type Expected = 1

		type Test = Expect<Equal<Actual, Expected>>
	})

	it('Test 03', () => {
		type Forest = ['🎄', '🎄', '🎅🏼', '🎄']

		type Actual = FindSanta<Forest>
		type Expected = 2

		type Test = Expect<Equal<Actual, Expected>>
	})

	it('Test 04', () => {
		type Forest = ['🎄', '🎄', '🎄', '🎅🏼', '🎄']

		type Actual = FindSanta<Forest>
		type Expected = 3

		type Test = Expect<Equal<Actual, Expected>>
	})

	it('Test 05', () => {
		type Forest = ['🎄', '🎄', '🎄', '🎄']

		type Actual = FindSanta<Forest>
		type Expected = never

		type Test = Expect<Equal<Actual, Expected>>
	})
})
