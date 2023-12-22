import type { Equal, Expect } from 'type-testing'
import type { NewGame, TicTacToe } from './solution'

describe('Challenge 21: create a type definition to play Tic Tac Toe game', () => {
	it('Test 01', () => {
		type Game = TicTacToe<NewGame, 'top-center'>
		type Expected = {
			board: [['  ', '❌', '  '], ['  ', '  ', '  '], ['  ', '  ', '  ']]
			state: '⭕'
		}

		type Test = Expect<Equal<Game, Expected>>
	})

	it('Test 02', () => {
		type Move01 = TicTacToe<NewGame, 'top-center'>

		type InvalidMove = TicTacToe<Move01, 'top-center'>
		type Expected = {
			board: [['  ', '❌', '  '], ['  ', '  ', '  '], ['  ', '  ', '  ']]
			state: '⭕'
		}

		type Test = Expect<Equal<InvalidMove, Expected>>
	})

	it('Test 03', () => {
		type Move01 = TicTacToe<NewGame, 'top-center'>
		type Move02 = TicTacToe<Move01, 'top-left'>
		type Move03 = TicTacToe<Move02, 'middle-center'>
		type Move04 = TicTacToe<Move03, 'bottom-left'>

		type XWin = TicTacToe<Move04, 'bottom-center'>
		type Expected = {
			board: [['⭕', '❌', '  '], ['  ', '❌', '  '], ['⭕', '❌', '  ']]
			state: '❌ Won'
		}

		type Test = Expect<Equal<XWin, Expected>>
	})

	it('Test 04', () => {
		type Move01 = TicTacToe<NewGame, 'top-center'>
		type Move02 = TicTacToe<Move01, 'top-left'>
		type Move03 = TicTacToe<Move02, 'middle-center'>
		type Move04 = TicTacToe<Move03, 'bottom-left'>
		type Move05 = TicTacToe<Move04, 'bottom-right'>

		type OWin = TicTacToe<Move05, 'middle-left'>
		type Expected = {
			board: [['⭕', '❌', '  '], ['⭕', '❌', '  '], ['⭕', '  ', '❌']]
			state: '⭕ Won'
		}

		type Test = Expect<Equal<OWin, Expected>>
	})

	it('Test 05', () => {
		type Game = {
			board: [['⭕', '❌', '⭕'], ['⭕', '❌', '❌'], ['❌', '⭕', '  ']]
			state: '⭕'
		}

		type Draw = TicTacToe<Game, 'bottom-right'>
		type Expected = {
			board: [['⭕', '❌', '⭕'], ['⭕', '❌', '❌'], ['❌', '⭕', '⭕']]
			state: 'Draw'
		}

		type Test = Expect<Equal<Draw, Expected>>
	})
})
