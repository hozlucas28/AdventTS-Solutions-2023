import type { Equal, Expect } from 'type-testing'
import type { SantasList } from './solution'

describe('Challenge 05: create a tuple type with the values of two lists (parameters) combined', () => {
	it('Test 01', () => {
		type Actual = SantasList<['tommy', 'trash'], ['bash', 'tru']>
		type Expected = ['tommy', 'trash', 'bash', 'tru']
		type Test = Expect<Equal<Actual, Expected>>
	})

	it('Test 02', () => {
		type Actual = SantasList<[], []>
		type Expected = []
		type Test = Expect<Equal<Actual, Expected>>
	})

	it('Test 03', () => {
		type Actual = SantasList<[], ['trash']>
		type Expected = ['trash']
		type Test = Expect<Equal<Actual, Expected>>
	})

	it('Test 04', () => {
		type Actual = SantasList<['john'], ['ashley', 'elliot', 'ziltoid']>
		type Expected = ['john', 'ashley', 'elliot', 'ziltoid']
		type Test = Expect<Equal<Actual, Expected>>
	})

	it('Test 05', () => {
		type Actual = SantasList<['1', 2, '3'], [false, boolean, '4', ['nested']]>
		type Expected = ['1', 2, '3', false, boolean, '4', ['nested']]
		type Test = Expect<Equal<Actual, Expected>>
	})

	it('Test 06', () => {
		// @ts-expect-error
		type Actual = SantasList<null, undefined>
	})
})
