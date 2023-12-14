import type { Equal, Expect } from 'type-testing'
import type { CookieSurveyInput } from './solution'

describe('Challenge 02: create a union with all names of the various different cookies', () => {
	it('Test 01', () => {
		const cookieInventory = {
			chocolate: 1,
			sugar: 20,
			gingerBread: 10,
			peanutButter: 30,
			snickeDoodle: 73,
		}

		type Actual = CookieSurveyInput<typeof cookieInventory>
		type Expected = 'chocolate' | 'sugar' | 'gingerBread' | 'peanutButter' | 'snickeDoodle'
		type Test = Expect<Equal<Actual, Expected>>
	})

	it('Test 02', () => {
		const unrelated = {
			hi: 1,
			hi2: 1,
			hi3: 1,
			hi4: 1,
			hi5: 1,
			hi6: 1,
			hi7: 1,
		}

		type Actual = CookieSurveyInput<typeof unrelated>
		type Expected = 'hi' | 'hi2' | 'hi3' | 'hi4' | 'hi5' | 'hi6' | 'hi7'
		type Test = Expect<Equal<Actual, Expected>>
	})
})
