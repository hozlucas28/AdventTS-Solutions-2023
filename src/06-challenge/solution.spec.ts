import type { Equal, Expect } from 'type-testing'
import type { FilterChildrenBy } from './solution'

describe('Challenge 06: create a generic type to exclude from first parameter all values inside the second one', () => {
	it('Test 01', () => {
		type Actual = FilterChildrenBy<'nice' | 'nice' | 'nice', 'naughty'>
		type Expected = 'nice'
		type Test = Expect<Equal<Actual, Expected>>
	})

	it('Test 02', () => {
		type Actual = FilterChildrenBy<'nice' | 'naughty' | 'naughty', 'naughty'>
		type Expected = 'nice'
		type Test = Expect<Equal<Actual, Expected>>
	})

	it('Test 03', () => {
		type Actual = FilterChildrenBy<string | number | (() => void), Function>
		type Expected = string | number
		type Test = Expect<Equal<Actual, Expected>>
	})
})
