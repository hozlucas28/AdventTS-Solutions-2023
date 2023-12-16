import type { Equal, Expect } from 'type-testing'
import type { FindSantaY as FindSanta } from './solution'

describe('Challenge 16: find index where Santa is inside an array of arrays', () => {
	it('Test 01', () => {
		type Forest01 = [['🎅🏼', '🎄', '🎄', '🎄'], ['🎄', '🎄', '🎄', '🎄'], ['🎄', '🎄', '🎄', '🎄'], ['🎄', '🎄', '🎄', '🎄']]

		type Actual = FindSanta<Forest01>
		type Expected = [0, 0]

		type Test = Expect<Equal<Actual, Expected>>
	})

	it('Test 02', () => {
		type Forest02 = [['🎄', '🎄', '🎄', '🎄'], ['🎄', '🎄', '🎄', '🎄'], ['🎄', '🎄', '🎄', '🎄'], ['🎄', '🎅🏼', '🎄', '🎄']]

		type Actual = FindSanta<Forest02>
		type Expected = [3, 1]

		type Test = Expect<Equal<Actual, Expected>>
	})
	it('Test 03', () => {
		type Forest03 = [['🎄', '🎄', '🎄', '🎄'], ['🎄', '🎄', '🎄', '🎄'], ['🎄', '🎄', '🎅🏼', '🎄'], ['🎄', '🎄', '🎄', '🎄']]

		type Actual = FindSanta<Forest03>
		type Expected = [2, 2]

		type Test = Expect<Equal<Actual, Expected>>
	})

	it('Test 04', () => {
		type Forest04 = [['🎄', '🎄', '🎄', '🎄'], ['🎄', '🎄', '🎄', '🎄'], ['🎄', '🎅🏼', '🎄', '🎄'], ['🎄', '🎄', '🎄', '🎄']]

		type Actual = FindSanta<Forest04>
		type Expected = [2, 1]

		type Test = Expect<Equal<Actual, Expected>>
	})

	it('Test 05', () => {
		type Forest05 = [['🎄', '🎄', '🎄', '🎄'], ['🎄', '🎄', '🎅🏼', '🎄'], ['🎄', '🎄', '🎄', '🎄'], ['🎄', '🎄', '🎄', '🎄']]

		type Actual = FindSanta<Forest05>
		type Expected = [1, 2]

		type Test = Expect<Equal<Actual, Expected>>
	})
})
