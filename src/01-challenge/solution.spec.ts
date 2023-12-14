import type { Equal, Expect } from 'type-testing'
import type { SantasFavoriteCookies } from './solution'

describe('Challenge 01: create a union of any Santa favorite cookies', () => {
	it('Test 01', () => {
		type Actual = SantasFavoriteCookies
		type Expected = 'ginger-bread' | 'chocolate-chip'
		type Test = Expect<Equal<Actual, Expected>>
	})
})
