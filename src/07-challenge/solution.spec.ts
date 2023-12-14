import type { Equal, Expect } from 'type-testing'
import type { AppendGood } from './solution'

describe('Challenge 07: generic type that takes an object, as a parameter, and renames the key names', () => {
	it('Test 01', () => {
		type WellBehavedList = {
			tom: { address: '1 candy cane lane' }
			timmy: { address: '43 chocolate dr' }
			trash: { address: '637 starlight way' }
			candace: { address: '12 aurora' }
		}

		type Actual = AppendGood<WellBehavedList>
		type Expected = {
			good_tom: { address: '1 candy cane lane' }
			good_timmy: { address: '43 chocolate dr' }
			good_trash: { address: '637 starlight way' }
			good_candace: { address: '12 aurora' }
		}

		type Test = Expect<Equal<Actual, Expected>>
	})

	it('Test 02', () => {
		type Unrelated = {
			dont: 'cheat'
			play: 'fair'
		}

		type Actual = AppendGood<Unrelated>
		type Expected = {
			good_dont: 'cheat'
			good_play: 'fair'
		}

		type Test = Expect<Equal<Actual, Expected>>
	})
})
