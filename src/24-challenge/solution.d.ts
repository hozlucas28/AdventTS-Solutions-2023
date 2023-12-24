// Utils
type ToString<T extends unknown> = `${T}`

type ParseInt<Str extends string> = Str extends `${infer Digit extends number}` ? Digit : never

type CreateArrOfLength<Length extends number, Arr extends 1[] = []> = Arr['length'] extends Length
	? Arr
	: CreateArrOfLength<Length, [...Arr, 1]>

type Length<Arr extends readonly unknown[]> = Arr['length']

type Concat<A extends unknown[], B extends unknown[]> = [...A, ...B]

type Pop<T extends unknown[]> = T extends [...infer Head, unknown] ? Head : T

type PopNTimes<T extends unknown[], N extends number = 1, Counter extends 1[] = []> = Counter['length'] extends N
	? T
	: PopNTimes<Pop<T>, N, [...Counter, 1]>

type GreaterThan<A extends number, B extends number, Counter extends 1[] = []> = Counter['length'] extends A
	? false
	: Counter['length'] extends B
		? true
		: GreaterThan<A, B, [...Counter, 1]>

type Add<A extends number, B extends number> = Length<Concat<CreateArrOfLength<A>, CreateArrOfLength<B>>>

type Substract<A extends number, B extends number> = A extends B
	? 0
	: GreaterThan<A, B> extends true
		? CreateArrOfLength<A> extends [...CreateArrOfLength<B>, ...infer U]
			? Length<U>
			: never
		: ParseInt<`-${ToString<Substract<B, A>>}`>

// Helpers
type MainCharacter = '🎅'

type Alley = '  '

type Obstacle = '🎄'

type DELICIOUS_COOKIES = '🍪'

type MazeItem = MainCharacter | Alley | Obstacle

type MazeMatrix = MazeItem[][]

type Directions = 'up' | 'down' | 'left' | 'right'

type OutOfRange<A extends number> = GreaterThan<A, 10>

type SantaRowIndex<Row extends MazeItem[], Counter extends 1[] = []> = Row extends [
	infer Head extends MazeItem,
	...infer Tail extends MazeItem[],
]
	? Head extends MainCharacter
		? Counter['length']
		: SantaRowIndex<Tail, [...Counter, 1]>
	: -1

type SantaPos<Board extends MazeMatrix, Counter extends 1[] = []> = Board extends [
	infer Row extends MazeItem[],
	...infer Body extends MazeMatrix,
]
	? SantaRowIndex<Row> extends -1
		? SantaPos<Body, [...Counter, 1]>
		: [Counter['length'], SantaRowIndex<Row>]
	: [-1, -1]

type SantaNewPos<Board extends MazeMatrix, Dir extends Directions> = SantaPos<Board> extends [
	infer Row extends number,
	infer Col extends number,
]
	? Dir extends 'up'
		? [Substract<Row, 1>, Col]
		: Dir extends 'down'
			? [Add<Row, 1>, Col]
			: Dir extends 'left'
				? [Row, Substract<Col, 1>]
				: Dir extends 'right'
					? [Row, Add<Col, 1>]
					: never
	: never

type ModifyPos<OriginalItem extends MazeItem, NewItem extends MainCharacter | Alley> = OriginalItem extends
	| MainCharacter
	| Alley
	? NewItem
	: OriginalItem

type ModifyRow<Row extends MazeItem[], NewItem extends MainCharacter | Alley, Col extends number> = [
	Col extends 0 ? ModifyPos<Row[0], NewItem> : Row[0],
	Col extends 1 ? ModifyPos<Row[1], NewItem> : Row[1],
	Col extends 2 ? ModifyPos<Row[2], NewItem> : Row[2],
	Col extends 3 ? ModifyPos<Row[3], NewItem> : Row[3],
	Col extends 4 ? ModifyPos<Row[4], NewItem> : Row[4],
	Col extends 5 ? ModifyPos<Row[5], NewItem> : Row[5],
	Col extends 6 ? ModifyPos<Row[6], NewItem> : Row[6],
	Col extends 7 ? ModifyPos<Row[7], NewItem> : Row[7],
	Col extends 8 ? ModifyPos<Row[8], NewItem> : Row[8],
	Col extends 9 ? ModifyPos<Row[9], NewItem> : Row[9],
]

type ModifyBoard<Board extends MazeMatrix, NewItem extends MainCharacter | Alley, Row extends number, Col extends number> = [
	Row extends 0 ? [...ModifyRow<Board[0], NewItem, Col>] : Board[0],
	Row extends 1 ? [...ModifyRow<Board[1], NewItem, Col>] : Board[1],
	Row extends 2 ? [...ModifyRow<Board[2], NewItem, Col>] : Board[2],
	Row extends 3 ? [...ModifyRow<Board[3], NewItem, Col>] : Board[3],
	Row extends 4 ? [...ModifyRow<Board[4], NewItem, Col>] : Board[4],
	Row extends 5 ? [...ModifyRow<Board[5], NewItem, Col>] : Board[5],
	Row extends 6 ? [...ModifyRow<Board[6], NewItem, Col>] : Board[6],
	Row extends 7 ? [...ModifyRow<Board[7], NewItem, Col>] : Board[7],
	Row extends 8 ? [...ModifyRow<Board[8], NewItem, Col>] : Board[8],
	Row extends 9 ? [...ModifyRow<Board[9], NewItem, Col>] : Board[9],
]

type ModifyEntireRow<Row extends MazeItem[], NewItem extends string, Acc extends NewItem[] = []> = Row extends [
	infer Head,
	...infer Tail,
]
	? ModifyEntireRow<Tail, NewItem, [...Acc, NewItem]>
	: Acc

type ModifyEntireBoard<Board extends MazeMatrix, NewItem extends string, Acc extends NewItem[][] = []> = Board extends [
	infer Row extends MazeItem[],
	...infer Body extends MazeMatrix,
]
	? ModifyEntireBoard<Body, NewItem, [...Acc, ModifyEntireRow<Row, NewItem>]>
	: Acc

// Solution
export type Move<Board extends MazeMatrix, Dir extends Directions> = SantaPos<Board> extends [
	infer SantaRow extends number,
	infer SantaCol extends number,
]
	? SantaNewPos<Board, Dir> extends [infer NewSantaRow extends number, infer NewSantaCol extends number]
		? OutOfRange<NewSantaRow> extends true
			? ModifyEntireBoard<Board, DELICIOUS_COOKIES>
			: OutOfRange<NewSantaCol> extends true
				? ModifyEntireBoard<Board, DELICIOUS_COOKIES>
				: ModifyBoard<Board, MainCharacter, NewSantaRow, NewSantaCol> extends Board
					? Board
					: ModifyBoard<[...ModifyBoard<Board, Alley, SantaRow, SantaCol>], MainCharacter, NewSantaRow, NewSantaCol>
		: never
	: never
