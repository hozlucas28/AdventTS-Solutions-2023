import type { Equal, Expect } from 'type-testing'
import type { DayCounter } from './solution'

describe('Challenge 13: create a union range from the first parameter to the second one', () => {
	it('Test 01', () => {
		type Actual = DayCounter<1, 12>
		type Expected = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12

		type Test = Expect<Equal<Actual, Expected>>
	})

	it('Test 02', () => {
		type Actual = DayCounter<1, 25>
		type Expected =
			| 1
			| 2
			| 3
			| 4
			| 5
			| 6
			| 7
			| 8
			| 9
			| 10
			| 11
			| 12
			| 13
			| 14
			| 15
			| 16
			| 17
			| 18
			| 19
			| 20
			| 21
			| 22
			| 23
			| 24
			| 25

		type Test = Expect<Equal<Actual, Expected>>
	})
})
