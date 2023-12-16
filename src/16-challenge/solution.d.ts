// Helpers
type Equal<A, B> = A extends B ? true : false

type Includes<A extends string[], B extends string> = A extends [infer Head extends string, ...infer Tail extends string[]]
	? Equal<Head, B> extends true
		? true
		: Includes<Tail, B>
	: false

type FindSantaX<T extends string[], P extends string = '🎅🏼', X extends number[] = []> = T extends [
	infer Head extends string,
	...infer Tail extends string[],
]
	? Equal<Head, P> extends true
		? X['length']
		: FindSantaX<Tail, P, [...X, 1]>
	: never

// Solution
export type FindSantaY<T extends string[][], P extends string = '🎅🏼', Y extends number[] = []> = T extends [
	infer Head extends string[],
	...infer Tail extends string[][],
]
	? Includes<Head, P> extends true
		? [Y['length'], FindSantaX<Head, P>]
		: FindSantaY<Tail, P, [...Y, 1]>
	: never
