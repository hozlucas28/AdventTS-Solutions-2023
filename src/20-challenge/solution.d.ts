// Helpers

// prettier-ignore
type Letters = {
  A: [
    '█▀█ ',
    '█▀█ ',
    '▀ ▀ ',
  ],
  B: [
    '█▀▄ ',
    '█▀▄ ',
    '▀▀  '
  ],
  C: [
    '█▀▀ ',
    '█ ░░',
    '▀▀▀ '
  ],
  E: [
    '█▀▀ ',
    '█▀▀ ',
    '▀▀▀ '
  ],
  H: [
    '█ █ ',
    '█▀█ ',
    '▀ ▀ '
  ],
  I: [
    '█ ',
    '█ ',
    '▀ '
  ],
  M: [
    '█▄░▄█ ',
    '█ ▀ █ ',
    '▀ ░░▀ '
  ],
  N: [
    '█▄░█ ',
    '█ ▀█ ',
    '▀ ░▀ '
  ],
  P: [
    '█▀█ ',
    '█▀▀ ',
    '▀ ░░'
  ],
  R: [
    '█▀█ ',
    '██▀ ',
    '▀ ▀ '
  ],
  S: [
    '█▀▀ ',
    '▀▀█ ',
    '▀▀▀ '
  ],
  T: [
    '▀█▀ ',
    '░█ ░',
    '░▀ ░'
  ],
  Y: [
    '█ █ ',
    '▀█▀ ',
    '░▀ ░'
  ],
  W: [
    '█ ░░█ ',
    '█▄▀▄█ ',
    '▀ ░ ▀ '
  ],
  ' ': [
    '░',
    '░',
    '░'
  ],
  ':': [
    '#',
    '░',
    '#'
  ],
  '*': [
    '░',
    '#',
    '░'
  ],
};

type Join<T extends string[]> = T extends [infer Head extends string, ...infer Tail extends string[]]
	? `${Head}${Join<Tail>}`
	: ''

type DeepJoin<T extends string[][], Acc extends string[] = []> = T extends [
	infer Head extends string[],
	...infer Tail extends string[][],
]
	? DeepJoin<Tail, [...Acc, Join<Head>]>
	: Acc

type WriteAsciiLine<T extends string, Acc extends string[][] = [[], [], []]> = T extends `${infer Head}${infer Tail}`
	? WriteAsciiLine<
			Tail,
			[
				[...Acc[0], Letters[Uppercase<Head>][0]],
				[...Acc[1], Letters[Uppercase<Head>][1]],
				[...Acc[2], Letters[Uppercase<Head>][2]],
			]
		>
	: DeepJoin<Acc>

// Solution
export type ToAsciiArt<T extends string, Acc extends string[] = []> = T extends `${infer Head}\n${infer Tail}`
	? ToAsciiArt<Tail, [...Acc, ...WriteAsciiLine<Head>, ...WriteAsciiLine<Tail>]>
	: Acc
