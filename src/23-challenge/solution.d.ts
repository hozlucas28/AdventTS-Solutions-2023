// Helpers
type Connect4Chips = '🔴' | '🟡'
type EmptyCell = '  '
type Connect4Cell = Connect4Chips | EmptyCell
type FinalResult = '🔴 Won' | '🟡 Won' | 'Draw'
type Connect4State = Connect4Chips | FinalResult

type Board = Connect4Cell[][]

type Column = 0 | 1 | 2 | 3 | 4 | 5 | 6

type EmptyBoard = [
	[EmptyCell, EmptyCell, EmptyCell, EmptyCell, EmptyCell, EmptyCell, EmptyCell],
	[EmptyCell, EmptyCell, EmptyCell, EmptyCell, EmptyCell, EmptyCell, EmptyCell],
	[EmptyCell, EmptyCell, EmptyCell, EmptyCell, EmptyCell, EmptyCell, EmptyCell],
	[EmptyCell, EmptyCell, EmptyCell, EmptyCell, EmptyCell, EmptyCell, EmptyCell],
	[EmptyCell, EmptyCell, EmptyCell, EmptyCell, EmptyCell, EmptyCell, EmptyCell],
	[EmptyCell, EmptyCell, EmptyCell, EmptyCell, EmptyCell, EmptyCell, EmptyCell],
]

type EmptyRow<B extends Board, Col extends Column> = B extends [
	infer A extends Connect4Cell[],
	infer B extends Connect4Cell[],
	infer C extends Connect4Cell[],
	infer D extends Connect4Cell[],
	infer E extends Connect4Cell[],
	infer F extends Connect4Cell[],
]
	? EmptyCol<F, Col> extends -1
		? EmptyCol<E, Col> extends -1
			? EmptyCol<D, Col> extends -1
				? EmptyCol<C, Col> extends -1
					? EmptyCol<B, Col> extends -1
						? EmptyCol<A, Col> extends -1
							? -1
							: 0
						: 1
					: 2
				: 3
			: 4
		: 5
	: -1

type EmptyCol<R extends Connect4Cell[], Col extends Column> = R[Col] extends EmptyCell ? Col : -1

type IsFull<B extends Board> = EmptyRow<B, 0> extends -1
	? EmptyRow<B, 1> extends -1
		? EmptyRow<B, 2> extends -1
			? EmptyRow<B, 3> extends -1
				? EmptyRow<B, 4> extends -1
					? EmptyRow<B, 5> extends -1
						? EmptyRow<B, 6> extends -1
							? true
							: false
						: false
					: false
				: false
			: false
		: false
	: false

type RowWinner<B extends Board, CounterRow extends 1[] = [], CounterCol extends 1[] = []> = B extends [
	...infer Body extends Board,
	infer Row extends Connect4Cell[],
]
	? CounterRow['length'] extends 6
		? ''
		: CounterCol['length'] extends 4
			? RowWinner<Body, [...CounterRow, 1], []>
			: Row[CounterCol['length']] extends Row[[...CounterCol, 1]['length']]
				? Row[CounterCol['length']] extends Row[[...CounterCol, 1, 1]['length']]
					? Row[CounterCol['length']] extends Row[[...CounterCol, 1, 1, 1]['length']]
						? Row[CounterCol['length']] extends EmptyCell
							? RowWinner<[...Body, Row], CounterRow, [...CounterCol, 1]>
							: `${Row[CounterCol['length']]} Won`
						: RowWinner<[...Body, Row], CounterRow, [...CounterCol, 1]>
					: RowWinner<[...Body, Row], CounterRow, [...CounterCol, 1]>
				: RowWinner<[...Body, Row], CounterRow, [...CounterCol, 1]>
	: ''

type ColWinner<B extends Board, CounterRow extends 1[] = [], CounterCol extends 1[] = []> = B extends [
	...infer Body extends Board,
	infer Row04 extends Connect4Cell[],
	infer Row03 extends Connect4Cell[],
	infer Row02 extends Connect4Cell[],
	infer Row01 extends Connect4Cell[],
]
	? CounterRow['length'] extends 3
		? ''
		: CounterCol['length'] extends 7
			? ColWinner<[...Body, Row04, Row03, Row02], [...CounterRow, 1], []>
			: Row01[CounterCol['length']] extends Row02[CounterCol['length']]
				? Row01[CounterCol['length']] extends Row03[CounterCol['length']]
					? Row01[CounterCol['length']] extends Row04[CounterCol['length']]
						? Row01[CounterCol['length']] extends EmptyCell
							? ColWinner<[...Body, Row04, Row03, Row02, Row01], CounterRow, [...CounterCol, 1]>
							: `${Row01[CounterCol['length']]} Won`
						: ColWinner<[...Body, Row04, Row03, Row02, Row01], CounterRow, [...CounterCol, 1]>
					: ColWinner<[...Body, Row04, Row03, Row02, Row01], CounterRow, [...CounterCol, 1]>
				: ColWinner<[...Body, Row04, Row03, Row02, Row01], CounterRow, [...CounterCol, 1]>
	: ''

type DiagonalLeftWinner<B extends Board, CounterRow extends 1[] = [1, 1, 1], CounterCol extends 1[] = []> = B extends [
	...infer Body extends Board,
	infer Row04 extends Connect4Cell[],
	infer Row03 extends Connect4Cell[],
	infer Row02 extends Connect4Cell[],
	infer Row01 extends Connect4Cell[],
]
	? CounterRow['length'] extends 6
		? ''
		: CounterCol['length'] extends 7
			? DiagonalLeftWinner<[...Body, Row04, Row03, Row02], [...CounterRow, 1], []>
			: Row04[CounterCol['length']] extends Row03[[...CounterCol, 1]['length']]
				? Row04[CounterCol['length']] extends Row02[[...CounterCol, 1, 1]['length']]
					? Row04[CounterCol['length']] extends Row01[[...CounterCol, 1, 1, 1]['length']]
						? Row04[CounterCol['length']] extends EmptyCell
							? DiagonalLeftWinner<[...Body, Row04, Row03, Row02, Row01], CounterRow, [...CounterCol, 1]>
							: `${Row04[CounterCol['length']]} Won`
						: DiagonalLeftWinner<[...Body, Row04, Row03, Row02, Row01], CounterRow, [...CounterCol, 1]>
					: DiagonalLeftWinner<[...Body, Row04, Row03, Row02, Row01], CounterRow, [...CounterCol, 1]>
				: DiagonalLeftWinner<[...Body, Row04, Row03, Row02, Row01], CounterRow, [...CounterCol, 1]>
	: ''

type DiagonalRightWinner<B extends Board, CounterRow extends 1[] = [], CounterCol extends 1[] = []> = B extends [
	...infer Body extends Board,
	infer Row04 extends Connect4Cell[],
	infer Row03 extends Connect4Cell[],
	infer Row02 extends Connect4Cell[],
	infer Row01 extends Connect4Cell[],
]
	? CounterRow['length'] extends 3
		? ''
		: CounterCol['length'] extends 4
			? DiagonalRightWinner<[...Body, Row04, Row03, Row02], [...CounterRow, 1], []>
			: Row01[CounterCol['length']] extends Row02[[...CounterCol, 1]['length']]
				? Row01[CounterCol['length']] extends Row03[[...CounterCol, 1, 1]['length']]
					? Row01[CounterCol['length']] extends Row04[[...CounterCol, 1, 1, 1]['length']]
						? Row01[CounterCol['length']] extends EmptyCell
							? DiagonalRightWinner<[...Body, Row04, Row03, Row02, Row01], CounterRow, [...CounterCol, 1]>
							: `${Row01[CounterCol['length']]} Won`
						: DiagonalRightWinner<[...Body, Row04, Row03, Row02, Row01], CounterRow, [...CounterCol, 1]>
					: DiagonalRightWinner<[...Body, Row04, Row03, Row02, Row01], CounterRow, [...CounterCol, 1]>
				: DiagonalRightWinner<[...Body, Row04, Row03, Row02, Row01], CounterRow, [...CounterCol, 1]>
	: ''

type DiagonalWinner<B extends Board> = DiagonalLeftWinner<B> extends '' ? DiagonalRightWinner<B> : DiagonalLeftWinner<B>

type ModifyRow<
	R extends Connect4Cell[],
	Chip extends Connect4State,
	Col extends Column,
	Counter extends 1[] = [],
	Acc extends Connect4Cell[] = [],
> = R extends [infer Head extends Connect4Cell, ...infer Tail extends Connect4Cell[]]
	? Col extends Counter['length']
		? [...Acc, Chip, ...Tail]
		: ModifyRow<Tail, Chip, Col, [...Counter, 1], [...Acc, Head]>
	: never

type ModifyBoard<
	B extends EmptyBoard | Board,
	Chip extends Connect4Chips,
	Row extends Exclude<Column, 6>,
	Col extends Column,
> = [
	Row extends 0 ? [...ModifyRow<B[0], Chip, Col>] : B[0],
	Row extends 1 ? [...ModifyRow<B[1], Chip, Col>] : B[1],
	Row extends 2 ? [...ModifyRow<B[2], Chip, Col>] : B[2],
	Row extends 3 ? [...ModifyRow<B[3], Chip, Col>] : B[3],
	Row extends 4 ? [...ModifyRow<B[4], Chip, Col>] : B[4],
	Row extends 5 ? [...ModifyRow<B[5], Chip, Col>] : B[5],
]

type NextChip<Chip extends Connect4Chips> = Chip extends '🔴' ? '🟡' : '🔴'

type State<B extends Board, PrevState extends Connect4Chips> = RowWinner<B> extends ''
	? ColWinner<B> extends ''
		? DiagonalWinner<B> extends ''
			? IsFull<B> extends true
				? 'Draw'
				: NextChip<PrevState>
			: DiagonalWinner<B>
		: ColWinner<B>
	: RowWinner<B>

type Game = {
	board: Board
	state: Connect4State
}

export type NewGame = {
	board: EmptyBoard
	state: '🟡'
}

// Solution
export type Connect4<B extends NewGame | Game, Col extends Column> = EmptyRow<B['board'], Col> extends -1
	? B
	: {
			board: [...ModifyBoard<B['board'], B['state'], EmptyRow<B['board'], Col>, Col>]
			state: State<[...ModifyBoard<B['board'], B['state'], EmptyRow<B['board'], Col>, Col>], B['state']>
		}
