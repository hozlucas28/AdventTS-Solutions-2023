import type { Equal, Expect } from 'type-testing'
import type { PresentDeliveryList } from './solution'

type Address = {
	address: string
	city: string
}

describe('Challenge 04: object type that takes a type as a parameter and then replace the values of each property with an address', () => {
	it('Test 01', () => {
		type MixedBehaviorList = {
			john: { behavior: 'good' }
			jimmy: { behavior: 'bad' }
			sara: { behavior: 'good' }
			suzy: { behavior: 'good' }
			chris: { behavior: 'good' }
			penny: { behavior: 'bad' }
		}

		type Actual = PresentDeliveryList<MixedBehaviorList>
		type Expected = {
			john: Address
			jimmy: Address
			sara: Address
			suzy: Address
			chris: Address
			penny: Address
		}

		type Test = Expect<Equal<Actual, Expected>>
	})

	it('Test 02', () => {
		type Unrelated = {
			hello: { hello: 'hello' }
			world: { world: 'world' }
		}

		type Actual = PresentDeliveryList<Unrelated>
		type Expected = {
			hello: Address
			world: Address
		}

		type Test = Expect<Equal<Actual, Expected>>
	})
})
