export type DecipherNaughtyList<T extends string, P extends string = ''> = T extends `${infer Head extends
	string}/${infer Tail extends string}`
	? P extends ''
		? DecipherNaughtyList<Tail, Head>
		: DecipherNaughtyList<Tail, P | Head>
	: P extends ''
		? T
		: T | P
