export type SantaListProtector<T extends Object> = {
	readonly [Key in keyof T]: T[Key] extends symbol | string | number | boolean | Function
		? T[Key]
		: T[Key] extends Object
			? SantaListProtector<T[Key]>
			: never
}
