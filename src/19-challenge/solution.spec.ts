import type { Equal, Expect } from 'type-testing'
import type { Rebuild } from './solution'

describe('Challenge 19: create an array of "n" elements based on an array of numbers', () => {
	it('Test 01', () => {
		type Actual = Rebuild<[2, 1, 3, 3, 1, 1, 2]>
		type Expected = ['🛹', '🛹', '🚲', '🛴', '🛴', '🛴', '🏄', '🏄', '🏄', '🛹', '🚲', '🛴', '🛴']
		type Test = Expect<Equal<Actual, Expected>>
	})

	it('Test 02', () => {
		type Actual = Rebuild<[3, 3, 2, 1, 2, 1, 2]>
		type Expected = ['🛹', '🛹', '🛹', '🚲', '🚲', '🚲', '🛴', '🛴', '🏄', '🛹', '🛹', '🚲', '🛴', '🛴']
		type Test = Expect<Equal<Actual, Expected>>
	})

	it('Test 03', () => {
		type Actual = Rebuild<[2, 3, 3, 5, 1, 1, 2]>
		type Expected = ['🛹', '🛹', '🚲', '🚲', '🚲', '🛴', '🛴', '🛴', '🏄', '🏄', '🏄', '🏄', '🏄', '🛹', '🚲', '🛴', '🛴']
		type Test = Expect<Equal<Actual, Expected>>
	})
})
