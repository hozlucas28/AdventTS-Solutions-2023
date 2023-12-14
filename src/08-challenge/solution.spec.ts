import type { Equal, Expect } from 'type-testing'
import type { RemoveNaughtyChildren } from './solution'

describe('Challenge 08: remove attributes from an object which key names starts with "naughty"', () => {
	it('Test 01', () => {
		type SantasList = {
			naughty_tom: { address: '1 candy cane lane' }
			good_timmy: { address: '43 chocolate dr' }
			naughty_trash: { address: '637 starlight way' }
			naughty_candace: { address: '12 aurora' }
		}

		type Actual = RemoveNaughtyChildren<SantasList>
		type Expected = {
			good_timmy: { address: '43 chocolate dr' }
		}

		type Test = Expect<Equal<Actual, Expected>>
	})

	it('Test 02', () => {
		type Unrelated = {
			dont: 'cheat'
			naughty_play: 'fair'
		}

		type Actual = RemoveNaughtyChildren<Unrelated>
		type Expected = { dont: 'cheat' }

		type Test = Expect<Equal<Actual, Expected>>
	})
})
