import type { Equal, Expect } from 'type-testing'
import type { Validate } from './solution'

describe('Challenge 22: check if a Sudoku board is valid', () => {
	it('Test 01', () => {
		type Actual = Validate<
			[
				[['💨', '💃', '🦌'], ['☄️', '❤️', '🌩️'], ['🌟', '⚡', '🔴']],
				[['🌟', '⚡', '🔴'], ['💨', '💃', '🦌'], ['☄️', '❤️', '🌩️']],
				[['☄️', '❤️', '🌩️'], ['🌟', '⚡', '🔴'], ['💨', '💃', '🦌']],
				[['🦌', '💨', '💃'], ['⚡', '☄️', '❤️'], ['🔴', '🌩️', '🌟']],
				[['🌩️', '🔴', '🌟'], ['🦌', '💨', '💃'], ['⚡', '☄️', '❤️']],
				[['⚡', '☄️', '❤️'], ['🌩️', '🔴', '🌟'], ['🦌', '💨', '💃']],
				[['💃', '🦌', '💨'], ['❤️', '🌟', '☄️'], ['🌩️', '🔴', '⚡']],
				[['🔴', '🌩️', '⚡'], ['💃', '🦌', '💨'], ['❤️', '🌟', '☄️']],
				[['❤️', '🌟', '☄️'], ['🔴', '🌩️', '⚡'], ['💃', '🦌', '💨']],
			]
		>
		type Expected = true

		type Test = Expect<Equal<Actual, Expected>>
	})

	it('Test 02', () => {
		type Actual = Validate<
			[
				[['🌩️', '💨', '☄️'], ['🌟', '🦌', '⚡'], ['❤️', '🔴', '💃']],
				[['🌟', '⚡', '❤️'], ['🔴', '💃', '☄️'], ['🌩️', '💨', '🦌']],
				[['🔴', '🦌', '💃'], ['💨', '❤️', '🌩️'], ['🌟', '⚡', '☄️']],
				[['❤️', '☄️', '🌩️'], ['💃', '⚡', '🔴'], ['💨', '🦌', '🌟']],
				[['🦌', '💃', '⚡'], ['🌩️', '🌟', '💨'], ['🔴', '☄️', '❤️']],
				[['💨', '🌟', '🔴'], ['🦌', '☄️', '❤️'], ['⚡', '💃', '🌩️']],
				[['☄️', '🔴', '💨'], ['❤️', '🌩️', '🦌'], ['💃', '🌟', '⚡']],
				[['💃', '❤️', '🦌'], ['⚡', '🔴', '🌟'], ['☄️', '🌩️', '💨']],
				[['⚡', '🌩️', '🌟'], ['☄️', '💨', '💃'], ['🦌', '❤️', '🔴']],
			]
		>
		type Expected = true

		type Test = Expect<Equal<Actual, Expected>>
	})

	it('Test 03', () => {
		type Actual = Validate<
			[
				[['🦌', '🔴', '💃'], ['🌩️', '☄️', '💨'], ['⚡', '❤️', '🌟']],
				[['🌟', '⚡', '💨'], ['❤️', '💃', '🔴'], ['☄️', '🌩️', '🦌']],
				[['☄️', '🌩️', '❤️'], ['⚡', '🌟', '🦌'], ['💃', '🔴', '💨']],
				[['🌩️', '💃', '🔴'], ['🦌', '💨', '⚡'], ['🌟', '☄️', '❤️']],
				[['❤️', '☄️', '⚡'], ['💃', '🌩️', '🌟'], ['🦌', '💨', '🔴']],
				[['💨', '🌟', '🦌'], ['☄️', '🔴', '❤️'], ['🌩️', '💃', '⚡']],
				[['💃', '💨', '🌟'], ['🔴', '🦌', '☄️'], ['❤️', '⚡', '🌩️']],
				[['🔴', '❤️', '☄️'], ['🌟', '⚡', '🌩️'], ['💨', '🦌', '💃']],
				[['⚡', '🦌', '🌩️'], ['💨', '❤️', '💃'], ['🔴', '🌟', '☄️']],
			]
		>
		type Expected = true

		type Test = Expect<Equal<Actual, Expected>>
	})

	it('Test 04', () => {
		type Actual = Validate<
			[
				[['💨', '💃', '🦌'], ['☄️', '❤️', '🌩️'], ['🌟', '⚡', '🔴']],
				[['🌟', '⚡', '🔴'], ['💨', '💃', '🦌'], ['☄️', '❤️', '🌩️']],
				[['☄️', '❤️', '🌩️'], ['🌟', '⚡', '🔴'], ['💨', '💃', '🦌']],
				[['🦌', '💨', '💃'], ['⚡', '☄️', '❤️'], ['🔴', '🌩️', '🌟']],
				[['🌩️', '🔴', '🌟'], ['🦌', '💨', '💃'], ['⚡', '☄️', '❤️']],
				[['⚡', '☄️', '❤️'], ['🌩️', '🔴', '🌟'], ['🦌', '💨', '💃']],
				[['💃', '🦌', '💨'], ['❤️', '🌟', '☄️'], ['⚡', '🔴', '🌟']],
				[['🔴', '🌩️', '⚡'], ['💃', '🦌', '💨'], ['❤️', '🌟', '☄️']],
				[['❤️', '🌟', '☄️'], ['🔴', '🌩️', '⚡'], ['💃', '🦌', '💨']],
			]
		>
		type Expected = false

		type Test = Expect<Equal<Actual, Expected>>
	})

	it('Test 05', () => {
		type Actual = Validate<
			[
				[['🌩️', '💨', '☄️'], ['🌟', '🦌', '⚡'], ['❤️', '🔴', '💃']],
				[['🌟', '⚡', '❤️'], ['🔴', '💃', '☄️'], ['🌩️', '💨', '🦌']],
				[['🔴', '🦌', '💃'], ['💨', '❤️', '🌩️'], ['🌟', '⚡', '☄️']],
				[['❤️', '☄️', '🌩️'], ['💃', '⚡', '🔴'], ['💨', '🦌', '🌟']],
				[['🦌', '💃', '⚡'], ['🌩️', '🌟', '💨'], ['🔴', '☄️', '❤️']],
				[['💨', '🌟', '🔴'], ['🦌', '☄️', '❤️'], ['⚡', '💃', '🌩️']],
				[['☄️', '🔴', '💨'], ['❤️', '💃', '🦌'], ['💃', '🌟', '⚡']],
				[['💃', '❤️', '🦌'], ['⚡', '🔴', '🌟'], ['☄️', '🌩️', '💨']],
				[['⚡', '🌩️', '🌟'], ['☄️', '💨', '💃'], ['🦌', '❤️', '🔴']],
			]
		>
		type Expected = false

		type Test = Expect<Equal<Actual, Expected>>
	})

	it('Test 06', () => {
		type Actual = Validate<
			[
				[['⚡', '🔴', '🌩️'], ['🦌', '❤️', '💨'], ['💨', '🌟', '☄️']],
				[['❤️', '🦌', '🌟'], ['💨', '🌟', '🔴'], ['💃', '⚡', '🌩️']],
				[['💨', '💃', '🌟'], ['☄️', '⚡', '🌩️'], ['🔴', '❤️', '🦌']],
				[['🦌', '⚡', '🔴'], ['❤️', '💃', '💨'], ['☄️', '🌩️', '🌟']],
				[['🌟', '🌩️', '💃'], ['⚡', '🔴', '☄️'], ['❤️', '🦌', '💨']],
				[['☄️', '💨', '❤️'], ['🌟', '🌩️', '🦌'], ['⚡', '💃', '🔴']],
				[['🌩️', '☄️', '💨'], ['💃', '🦌', '⚡'], ['🌟', '🔴', '❤️']],
				[['🔴', '❤️', '⚡'], ['🌩️', '☄️', '🌟'], ['🦌', '💨', '💃']],
				[['💃', '🌟', '🦌'], ['🔴', '💨', '❤️'], ['🌩️', '☄️', '⚡']],
			]
		>
		type Expected = false

		type Test = Expect<Equal<Actual, Expected>>
	})
})
