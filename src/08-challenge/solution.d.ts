export type RemoveNaughtyChildren<T extends Object> = {
	[Key in keyof T as Key extends `naughty_${string}` ? never : Key]: T[Key]
}
