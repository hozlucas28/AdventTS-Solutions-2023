# Challenge 18

Santa needs your help to count the number of presents he has to deliver! He's got all kinds of presents, from video game consoles (🎮), stuffed animals (🧸), toy cars (🏎️), books (📚), and more!

We need a general purpose type that can take a tuple of items as its first argument and an item to search for as the second argument. It should return a count of the item specified.

For example:

```ts
Count<['👟', '👟', '💻', '🎸', '🧩', '👟', '🧸'], '👟'>
```

should return `3` because there are three `👟`.

## Expected Behavior

```ts
import { Expect, Equal } from 'type-testing'

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

type Test01 = Count<ToySack, '👟'> // 8
type Test02 = Count<ToySack, '🧦'> // 0
type Test03 = Count<ToySack, '🧩'> // 6
type Test04 = Count<ToySack, '🛹'> // 1
type Test05 = Count<ToySack, '🏎️'> // 3
type Test06 = Count<ToySack, '📚'> // 5
```

> Prompt by [Dimitri Mitropoulos](https://github.com/dimitropoulos) of [MiTS](https://www.youtube.com/@MichiganTypeScript)
