// Helpers
type Equal<A, B> = A extends B ? true : false

// Solution
export type FindSanta<T extends string[], P extends string = '🎅🏼', Count extends number[] = []> = T extends [
	infer Head extends string,
	...infer Tail extends string[],
]
	? Equal<Head, P> extends true
		? Count['length']
		: FindSanta<Tail, P, [...Count, 1]>
	: never
