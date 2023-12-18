export type Count<ToySack extends string[], Toy extends string, Counter extends 1[] = []> = ToySack extends [
	infer Head extends string,
	...infer Tail extends string[],
]
	? Head extends Toy
		? Count<Tail, Toy, [...Counter, 1]>
		: Count<Tail, Toy, Counter>
	: Counter['length']
