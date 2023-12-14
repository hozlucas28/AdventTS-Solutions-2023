# Challenge 12

Strange as it may sound... Santa went to college with someone that works at a big silicon valley networking company. They've been buddies for years. So much so that in 2023 Santa pushed the workshop's board until they approved budget to get WiFi on the entire campus. That way Santa can browse TikTok as he walks from building to building across the campus.

But after all that doom scrolling, Santa realized he has lost himself in a Christmas tree forest! A search team of elves has been deployed to find him, but he needs to give them more information about where he is among the trees.

`FindSanta` is a type that takes a tuple as its only argument and returns the index where Santa is located. Let's help Santa get back to the thing he's best at: inspiring leadership.

note: `never` is returned if Santa cannot be found among the trees

## Expected Behavior

```ts
type Forest01 = ['🎅🏼', '🎄', '🎄', '🎄']
type SandataIndex01 = FindSanta<Forest01> // 0

type Forest02 = ['🎄', '🎅🏼', '🎄', '🎄', '🎄', '🎄']
type SandataIndex02 = FindSanta<Forest02> // 1

type Forest03 = ['🎄', '🎄', '🎅🏼', '🎄']
type SandataIndex03 = FindSanta<Forest03> // 2

type Forest04 = ['🎄', '🎄', '🎄', '🎅🏼', '🎄']
type SandataIndex04 = FindSanta<Forest04> // 3

type Forest05 = ['🎄', '🎄', '🎄', '🎄']
type SandataIndex05 = FindSanta<Forest05> // never
```

> Prompt by [Dimitri Mitropoulos](https://github.com/dimitropoulos) of [MiTS](https://www.youtube.com/@MichiganTypeScript)
