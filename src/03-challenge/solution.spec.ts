import type { Equal, Expect } from 'type-testing'
import type { GiftWrapper } from './solution'

describe('Challenge 03: define specific type values for Present, From, and To attributes', () => {
	it('Test 01', () => {
		type Actual = GiftWrapper<'Car', 'Santa', 'Trash'>
		type Expected = { from: 'Santa'; present: 'Car'; to: 'Trash' }
		type Test = Expect<Equal<Actual, Expected>>
	})

	it('Test 02', () => {
		type Actual = GiftWrapper<'vscode', 'Trash', 'Prime'>
		type Expected = { from: 'Trash'; present: 'vscode'; to: 'Prime' }
		type Test = Expect<Equal<Actual, Expected>>
	})

	it('Test 03', () => {
		type Actual = GiftWrapper<'javascript', 'Dan', 'Evan'>
		type Expected = { from: 'Dan'; present: 'javascript'; to: 'Evan' }
		type Test = Expect<Equal<Actual, Expected>>
	})
})
