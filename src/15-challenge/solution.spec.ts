import type { Equal, Expect } from 'type-testing'
import type { BoxToys } from './solution'

describe('Challenge 15: create an array of "n" strings with a string and an union of numbers', () => {
	it('Test 01', () => {
		type Actual = BoxToys<'doll', 1>
		type Expected = ['doll']
		type Test = Expect<Equal<Actual, Expected>>
	})

	it('Test 02', () => {
		type Actual = BoxToys<'nutcracker', 3 | 4>
		type Expected = ['nutcracker', 'nutcracker', 'nutcracker'] | ['nutcracker', 'nutcracker', 'nutcracker', 'nutcracker']
		type Test = Expect<Equal<Actual, Expected>>
	})
})
