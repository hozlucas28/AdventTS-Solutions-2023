// Helpers
type Dasher = '💨'

type Dancer = '💃'

type Prancer = '🦌'

type Vixen = '🌟'

type Comet = '☄️'

type Cupid = '❤️'

type Donner = '🌩️'

type Blitzen = '⚡'

type Rudolph = '🔴'

type Reindeer = Dasher | Dancer | Prancer | Vixen | Comet | Cupid | Donner | Blitzen | Rudolph

type ValidateRow<Row extends Reindeer[][]> = Row extends [
	infer A extends Reindeer[],
	infer B extends Reindeer[],
	infer C extends Reindeer[],
]
	? A[number] & B[number] extends never
		? A[number] & C[number] extends never
			? B[number] & C[number] extends never
				? true
				: false
			: false
		: false
	: never

// Solution
export type Validate<Board extends Reindeer[][][]> = Board extends [
	infer Head extends Reindeer[][],
	...infer Rest extends Reindeer[][][],
]
	? ValidateRow<Head> extends true
		? Validate<Rest>
		: false
	: true
