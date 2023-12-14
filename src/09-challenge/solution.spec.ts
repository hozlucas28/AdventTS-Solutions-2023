import type { Equal, Expect } from 'type-testing'
import type { Reverse } from './solution'

describe('Challenge 09: reverse a string', () => {
	it('Test 01', () => {
		type Actual = Reverse<'rehsaD'>
		type Expected = 'Dasher'
		type Test = Expect<Equal<Actual, Expected>>
	})

	it('Test 02', () => {
		type Actual = Reverse<'recnaD'>
		type Expected = 'Dancer'
		type Test = Expect<Equal<Actual, Expected>>
	})

	it('Test 03', () => {
		type Actual = Reverse<'recnarP'>
		type Expected = 'Prancer'
		type Test = Expect<Equal<Actual, Expected>>
	})

	it('Test 04', () => {
		type Actual = Reverse<'nexiV'>
		type Expected = 'Vixen'
		type Test = Expect<Equal<Actual, Expected>>
	})

	it('Test 05', () => {
		type Actual = Reverse<'temoC'>
		type Expected = 'Comet'
		type Test = Expect<Equal<Actual, Expected>>
	})

	it('Test 06', () => {
		type Actual = Reverse<'dipuC'>
		type Expected = 'Cupid'
		type Test = Expect<Equal<Actual, Expected>>
	})

	it('Test 07', () => {
		type Actual = Reverse<'rennoD'>
		type Expected = 'Donner'
		type Test = Expect<Equal<Actual, Expected>>
	})

	it('Test 08', () => {
		type Actual = Reverse<'neztilB'>
		type Expected = 'Blitzen'
		type Test = Expect<Equal<Actual, Expected>>
	})

	it('Test 09', () => {
		type Actual = Reverse<'hploduR'>
		type Expected = 'Rudolph'
		type Test = Expect<Equal<Actual, Expected>>
	})
})
