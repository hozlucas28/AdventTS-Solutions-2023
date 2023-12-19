// Helpers
type Toys = ['🛹', '🚲', '🛴', '🏄']

type Multiply<T extends Toy, N extends number, Acc extends Toys[] = []> = Acc['length'] extends N
	? Acc
	: Multiply<T, N, [...Acc, T]>

// Solution
export type Rebuild<T extends number[], Counter extends 1[] = [], Acc extends Toys[] = []> = T extends [
	infer Head extends number,
	...infer Tail extends number[],
]
	? Counter['length'] extends Toys['length']
		? Rebuild<Tail, [1], [...Acc, ...Multiply<Toys[0], Head>]>
		: Rebuild<Tail, [...Counter, 1], [...Acc, ...Multiply<Toys[Counter['length']], Head>]>
	: Acc
