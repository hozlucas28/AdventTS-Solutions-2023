export type StreetSuffixTester<Str extends string, Word extends string> = Str extends `${string}${Word}` ? true : false
