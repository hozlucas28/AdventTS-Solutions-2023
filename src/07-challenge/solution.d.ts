export type AppendGood<T extends Object> = {
	[Key in keyof T as `good_${string & Key}`]: T[Key]
}
