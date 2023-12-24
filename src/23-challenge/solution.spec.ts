import type { Equal, Expect } from 'type-testing'
import type { Connect4, NewGame } from './solution'

describe('Challenge 23: create a type definition to play Connect 4 game', () => {
	it('Test 01', () => {
		type Actual = Connect4<NewGame, 0>

		type Expected = {
			board: [
				['  ', '  ', '  ', '  ', '  ', '  ', '  '],
				['  ', '  ', '  ', '  ', '  ', '  ', '  '],
				['  ', '  ', '  ', '  ', '  ', '  ', '  '],
				['  ', '  ', '  ', '  ', '  ', '  ', '  '],
				['  ', '  ', '  ', '  ', '  ', '  ', '  '],
				['🟡', '  ', '  ', '  ', '  ', '  ', '  '],
			]
			state: '🔴'
		}

		type Test = Expect<Equal<Actual, Expected>>
	})

	it('Test 02', () => {
		type Move01 = Connect4<NewGame, 0>
		type Move02 = Connect4<Move01, 0>
		type Move03 = Connect4<Move02, 0>
		type Move04 = Connect4<Move03, 1>
		type Move05 = Connect4<Move04, 2>
		type Move06 = Connect4<Move05, 1>

		type Expected = {
			board: [
				['  ', '  ', '  ', '  ', '  ', '  ', '  '],
				['  ', '  ', '  ', '  ', '  ', '  ', '  '],
				['  ', '  ', '  ', '  ', '  ', '  ', '  '],
				['🟡', '  ', '  ', '  ', '  ', '  ', '  '],
				['🔴', '🔴', '  ', '  ', '  ', '  ', '  '],
				['🟡', '🔴', '🟡', '  ', '  ', '  ', '  '],
			]
			state: '🟡'
		}

		type Test = Expect<Equal<Move06, Expected>>
	})

	it('Test 03', () => {
		type Board = {
			board: [
				['  ', '  ', '  ', '  ', '  ', '  ', '  '],
				['  ', '  ', '  ', '  ', '  ', '  ', '  '],
				['🟡', '  ', '  ', '  ', '  ', '  ', '  '],
				['🟡', '  ', '  ', '  ', '  ', '  ', '  '],
				['🔴', '🔴', '🔴', '  ', '  ', '  ', '  '],
				['🟡', '🔴', '🟡', '🟡', '  ', '  ', '  '],
			]
			state: '🔴'
		}

		type RedWin = Connect4<Board, 3>

		type Expected = {
			board: [
				['  ', '  ', '  ', '  ', '  ', '  ', '  '],
				['  ', '  ', '  ', '  ', '  ', '  ', '  '],
				['🟡', '  ', '  ', '  ', '  ', '  ', '  '],
				['🟡', '  ', '  ', '  ', '  ', '  ', '  '],
				['🔴', '🔴', '🔴', '🔴', '  ', '  ', '  '],
				['🟡', '🔴', '🟡', '🟡', '  ', '  ', '  '],
			]
			state: '🔴 Won'
		}

		type Test = Expect<Equal<RedWin, Expected>>
	})

	it('Test 04', () => {
		type Board = {
			board: [
				['  ', '  ', '  ', '  ', '  ', '  ', '  '],
				['  ', '  ', '  ', '  ', '  ', '  ', '  '],
				['🔴', '  ', '  ', '  ', '  ', '  ', '  '],
				['🟡', '  ', '  ', '  ', '  ', '  ', '  '],
				['🔴', '  ', '🔴', '🔴', '  ', '  ', '  '],
				['🟡', '  ', '🟡', '🟡', '  ', '  ', '  '],
			]
			state: '🟡'
		}

		type YellowWin = Connect4<Board, 1>

		type Expected = {
			board: [
				['  ', '  ', '  ', '  ', '  ', '  ', '  '],
				['  ', '  ', '  ', '  ', '  ', '  ', '  '],
				['🔴', '  ', '  ', '  ', '  ', '  ', '  '],
				['🟡', '  ', '  ', '  ', '  ', '  ', '  '],
				['🔴', '  ', '🔴', '🔴', '  ', '  ', '  '],
				['🟡', '🟡', '🟡', '🟡', '  ', '  ', '  '],
			]
			state: '🟡 Won'
		}

		type Test = Expect<Equal<YellowWin, Expected>>
	})

	it('Test 05', () => {
		type Board = {
			board: [
				['  ', '  ', '  ', '  ', '  ', '  ', '  '],
				['  ', '  ', '  ', '  ', '  ', '  ', '  '],
				['  ', '  ', '  ', '  ', '  ', '  ', '  '],
				['  ', '  ', '🟡', '🔴', '  ', '  ', '  '],
				['🔴', '🟡', '🔴', '🔴', '  ', '  ', '  '],
				['🟡', '🔴', '🟡', '🟡', '  ', '  ', '  '],
			]
			state: '🟡'
		}

		type YellowDiagonalWin = Connect4<Board, 3>

		type Expected = {
			board: [
				['  ', '  ', '  ', '  ', '  ', '  ', '  '],
				['  ', '  ', '  ', '  ', '  ', '  ', '  '],
				['  ', '  ', '  ', '🟡', '  ', '  ', '  '],
				['  ', '  ', '🟡', '🔴', '  ', '  ', '  '],
				['🔴', '🟡', '🔴', '🔴', '  ', '  ', '  '],
				['🟡', '🔴', '🟡', '🟡', '  ', '  ', '  '],
			]
			state: '🟡 Won'
		}

		type Test = Expect<Equal<YellowDiagonalWin, Expected>>
	})

	it('Test 06', () => {
		type Board = {
			board: [
				['🟡', '🔴', '🔴', '🟡', '🟡', '🔴', '  '],
				['🔴', '🟡', '🟡', '🔴', '🔴', '🟡', '🔴'],
				['🟡', '🔴', '🔴', '🟡', '🟡', '🔴', '🟡'],
				['🔴', '🟡', '🟡', '🔴', '🔴', '🟡', '🔴'],
				['🟡', '🔴', '🔴', '🟡', '🟡', '🔴', '🟡'],
				['🔴', '🟡', '🟡', '🔴', '🔴', '🟡', '🔴'],
			]
			state: '🟡'
		}

		type Draw = Connect4<Board, 6>

		type Expected = {
			board: [
				['🟡', '🔴', '🔴', '🟡', '🟡', '🔴', '🟡'],
				['🔴', '🟡', '🟡', '🔴', '🔴', '🟡', '🔴'],
				['🟡', '🔴', '🔴', '🟡', '🟡', '🔴', '🟡'],
				['🔴', '🟡', '🟡', '🔴', '🔴', '🟡', '🔴'],
				['🟡', '🔴', '🔴', '🟡', '🟡', '🔴', '🟡'],
				['🔴', '🟡', '🟡', '🔴', '🔴', '🟡', '🔴'],
			]
			state: 'Draw'
		}

		type Test = Expect<Equal<Draw, Expected>>
	})
})
