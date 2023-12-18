import type { Equal, Expect } from 'type-testing'
import type { Count } from './solution'

type ToySack = [
	'🎸',
	'🎧',
	'👟',
	'👟',
	'💻',
	'🪀',
	'🧩',
	'🎮',
	'🎨',
	'🕹️',
	'📱',
	'🧩',
	'🧸',
	'🎧',
	'👟',
	'🚲',
	'📚',
	'⌚',
	'🎨',
	'👟',
	'🎸',
	'🧸',
	'👟',
	'🎸',
	'📱',
	'🎧',
	'🎮',
	'🎒',
	'📱',
	'🧩',
	'🧩',
	'🚲',
	'🕹️',
	'🧵',
	'📱',
	'🕹️',
	'🕰️',
	'🧢',
	'🕹️',
	'👟',
	'🧸',
	'📚',
	'🧁',
	'🧩',
	'🎸',
	'🎮',
	'🧁',
	'📚',
	'💻',
	'⌚',
	'🛹',
	'🧁',
	'🧣',
	'🪁',
	'🎸',
	'🧸',
	'🧸',
	'🧸',
	'🧩',
	'🪁',
	'🏎️',
	'🏎️',
	'🧁',
	'📚',
	'🧸',
	'🕶️',
	'💻',
	'⌚',
	'⌚',
	'🕶️',
	'🎧',
	'🎧',
	'🎧',
	'💻',
	'👟',
	'🎸',
	'💻',
	'🪐',
	'📚',
	'🎨',
	'📱',
	'🎧',
	'📱',
	'🎸',
	'🏎️',
	'👟',
	'🚲',
	'📱',
	'🚲',
	'🎸',
]

describe('Challenge 18: count how many toys of the specified toy are inside the toy stack', () => {
	it('Test 01', () => {
		type Actual = Count<ToySack, '👟'>
		type Expected = 8
		type Test = Expect<Equal<Actual, Expected>>
	})

	it('Test 02', () => {
		type Actual = Count<ToySack, '🧦'>
		type Expected = 0
		type Test = Expect<Equal<Actual, Expected>>
	})

	it('Test 03', () => {
		type Actual = Count<ToySack, '🧩'>
		type Expected = 6
		type Test = Expect<Equal<Actual, Expected>>
	})

	it('Test 04', () => {
		type Actual = Count<ToySack, '🛹'>
		type Expected = 1
		type Test = Expect<Equal<Actual, Expected>>
	})

	it('Test 05', () => {
		type Actual = Count<ToySack, '🏎️'>
		type Expected = 3
		type Test = Expect<Equal<Actual, Expected>>
	})

	it('Test 06', () => {
		type Actual = Count<ToySack, '📚'>
		type Expected = 5
		type Test = Expect<Equal<Actual, Expected>>
	})
})
