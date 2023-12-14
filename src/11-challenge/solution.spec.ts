import type { Equal, Expect } from 'type-testing'
import type { SantaListProtector } from './solution'

describe('Challenge 11: deep Readonly', () => {
	it('Test 01', () => {
		type API = {
			hacksore: () => 'naughty'
			trash: string
			elliot: {
				candace: {
					address: {
						k: 'hello'
						street: {
							name: 'candy cane way'
							num: number
						}
					}
					children: ['harry', { saying: ['hey'] }]
				}
				penny: boolean
			}
		}

		type Actual = SantaListProtector<API>
		type Expected = {
			readonly hacksore: () => 'naughty'
			readonly trash: string
			readonly elliot: {
				readonly penny: boolean
				readonly candace: {
					readonly address: {
						readonly street: {
							readonly name: 'candy cane way'
							readonly num: number
						}
						readonly k: 'hello'
					}
					readonly children: readonly [
						'harry',
						{
							readonly saying: readonly ['hey']
						},
					]
				}
			}
		}

		type Test = Expect<Equal<Actual, Expected>>
	})

	it('Test 02', () => {
		type API = {
			netflix: { isChill: boolean }
			prime: string
			theo: () => 'naughty'
		}

		type Actual = SantaListProtector<API>
		type Expected = {
			readonly theo: () => 'naughty'
			readonly prime: string
			readonly netflix: {
				readonly isChill: boolean
			}
		}

		type Test = Expect<Equal<Actual, Expected>>
	})
})
