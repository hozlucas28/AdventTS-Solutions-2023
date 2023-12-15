import type { Equal, Expect } from 'type-testing'
import type { DecipherNaughtyList } from './solution'

describe('Challenge 14: turn a string into a union of strings', () => {
	it('Test 01', () => {
		type Actual = DecipherNaughtyList<'timmy/jimmy'>
		type Expected = 'jimmy' | 'timmy'
		type Test = Expect<Equal<Actual, Expected>>
	})

	it('Test 02', () => {
		type Actual = DecipherNaughtyList<'elliot'>
		type Expected = 'elliot'
		type Test = Expect<Equal<Actual, Expected>>
	})

	it('Test 03', () => {
		type Actual = DecipherNaughtyList<'melkey/prime/theo/trash'>
		type Expected = 'melkey' | 'prime' | 'theo' | 'trash'
		type Test = Expect<Equal<Actual, Expected>>
	})
})
