// Helpers
type TicTacToeChip = '❌' | '⭕'

type TicTacToeEndState = '❌ Won' | '⭕ Won' | 'Draw'

type TicTacToeState = TicTacToeChip | TicTacToeEndState

type TicTacToeEmptyCell = '  '

type TicTacToeCell = TicTacToeChip | TicTacToeEmptyCell

type TicTacToeYPositions = 'top' | 'middle' | 'bottom'

type TicTacToeXPositions = 'left' | 'center' | 'right'

type TicTacToePositions = `${TicTacToeYPositions}-${TicTacToeXPositions}`

type TicTactToeBoard = TicTacToeCell[][]

type TicTacToeGame = {
	board: TicTactToeBoard
	state: TicTacToeState
}

type EmptyBoard = [['  ', '  ', '  '], ['  ', '  ', '  '], ['  ', '  ', '  ']]

type Position<P extends TicTacToeXPositions | TicTacToeYPositions> = P extends 'top' | 'left'
	? 0
	: P extends 'middle' | 'center'
		? 1
		: 2

type EmptyCells<
	T extends TicTactToeBoard,
	CounterRow extends 1[] = [],
	CounterCol extends 1[] = [],
	Acc extends 1[] = [],
> = T extends [infer Row extends TicTacToeCell[], ...infer Rows extends TicTactToeBoard]
	? CounterRow['length'] extends 3
		? Acc['length']
		: CounterCol['length'] extends 3
			? EmptyCells<Rows, [...CounterRow, 1], [], Acc>
			: Row[CounterCol['length']] extends TicTacToeEmptyCell
				? EmptyCells<T, CounterRow, [...CounterCol, 1], [...Acc, 1]>
				: EmptyCells<T, CounterRow, [...CounterCol, 1], Acc>
	: Acc['length']

type ColsToRows<T extends TicTactToeBoard, Counter extends 1[] = [], Acc extends TicTactToeBoard = []> = T extends [
	infer First extends TicTacToeCell[],
	infer Second extends TicTacToeCell[],
	infer Third extends TicTacToeCell[],
]
	? Counter['length'] extends 3
		? Acc
		: ColsToRows<
				T,
				[...Counter, 1],
				[...Acc, [First[Counter['length']], Second[Counter['length']], Third[Counter['length']]]]
			>
	: Acc

type ModifyRow<Cell extends TicTacToeCell[], Value extends TicTacToeState, Index extends number> = [
	Index extends 0 ? (Cell[0] extends TicTacToeEmptyCell ? Value : Cell[0]) : Cell[0],
	Index extends 1 ? (Cell[1] extends TicTacToeEmptyCell ? Value : Cell[1]) : Cell[1],
	Index extends 2 ? (Cell[2] extends TicTacToeEmptyCell ? Value : Cell[2]) : Cell[2],
]

type ModifyBoard<T extends TicTactToeBoard, Value extends TicTacToeState, Y extends number, X extends number> = [
	Y extends 0 ? [...ModifyRow<T[0], Value, X>] : T[0],
	Y extends 1 ? [...ModifyRow<T[1], Value, X>] : T[1],
	Y extends 2 ? [...ModifyRow<T[2], Value, X>] : T[2],
]

type RowWinner<T extends TicTactToeBoard, Counter extends 1[] = []> = T extends [
	infer Row extends TicTacToeCell[],
	...infer Rows extends TicTactToeBoard,
]
	? Counter['length'] extends 3
		? ''
		: Row[1] extends Row[0]
			? Row[1] extends Row[2]
				? Row[1]
				: RowWinner<Rows, [...Counter, 1]>
			: RowWinner<Rows, [...Counter, 1]>
	: ''

type ColWinner<T extends TicTactToeBoard, Counter extends 1[] = []> = RowWinner<ColsToRows<T>>

type State<
	OriginalBoard extends TicTactToeBoard,
	ModifiedBoard extends TicTactToeBoard,
	PrevState extends TicTacToeState,
	Y extends number,
	X extends number,
> = RowWinner<ModifiedBoard> extends TicTacToeChip
	? `${RowWinner<ModifiedBoard>} Won`
	: ColWinner<ModifiedBoard> extends TicTacToeChip
		? `${ColWinner<ModifiedBoard>} Won`
		: EmptyCells<ModifiedBoard> extends 0
			? 'Draw'
			: OriginalBoard[Y][X] extends TicTacToeEmptyCell
				? PrevState extends '❌'
					? '⭕'
					: '❌'
				: PrevState

export type NewGame = {
	board: EmptyBoard
	state: '❌'
}

// Solution
export type TicTacToe<T extends TicTacToeGame, P extends TicTacToePositions> = P extends `${infer Y extends
	TicTacToeYPositions}-${infer X extends TicTacToeXPositions}`
	? {
			board: [...ModifyBoard<T['board'], T['state'], Position<Y>, Position<X>>]
			state: State<
				T['board'],
				[...ModifyBoard<T['board'], T['state'], Position<Y>, Position<X>>],
				T['state'],
				Position<Y>,
				Position<X>
			>
		}
	: never
