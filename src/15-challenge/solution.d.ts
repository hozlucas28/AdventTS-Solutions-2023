// Helpers
type UnionToIntersection<U> = (U extends any ? (k: U) => void : never) extends (k: infer I) => void ? I : never

type Push<T extends any[], V> = [...T, V]

type LastOf<T> = UnionToIntersection<T extends any ? () => T : never> extends () => infer R ? R : never

type ArrayToUnion<T extends any[]> = T[number]

type UnionToArray<T, L = LastOf<T>, N = [T] extends [never] ? true : false> = true extends N
	? []
	: Push<UnionToArray<Exclude<T, L>>, L>

type StringToNArrays<T extends string, P extends number, Acc extends T[] = []> = P extends Acc['length']
	? Acc
	: StringToNArrays<T, P, [...Acc, T]>

// Solution
export type BoxToys<T extends string, P extends number, Union extends number[] = UnionToArray<P>> = StringToNArrays<
	T,
	Union[number]
>
