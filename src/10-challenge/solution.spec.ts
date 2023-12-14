import type { Equal, Expect } from 'type-testing'
import type { StreetSuffixTester } from './solution'

describe('Challenge 10: check if a string ends with another string', () => {
	it('Test 01', () => {
		type Actual = StreetSuffixTester<'Candy Cane Way', 'Way'>
		type Expected = true
		type Test = Expect<Equal<Actual, Expected>>
	})

	it('Test 02', () => {
		type Actual = StreetSuffixTester<'Chocalate Drive', 'Drive'>
		type Expected = true
		type Test = Expect<Equal<Actual, Expected>>
	})

	it('Test 03', () => {
		type Actual = StreetSuffixTester<'Sugar Lane', 'Drive'>
		type Expected = false
		type Test = Expect<Equal<Actual, Expected>>
	})

	it('Test 04', () => {
		type Actual = StreetSuffixTester<'Fifth Dimensional Nebulo 9', 'invalid'>
		type Expected = false
		type Test = Expect<Equal<Actual, Expected>>
	})
})
