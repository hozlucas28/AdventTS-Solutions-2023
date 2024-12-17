# Challenge 17

It's Sunday and there's one week to go before the big day (Christmas Eve) when the elfs' work for the year will finally be complete. For the last 20 years the only game the elves have had to play together is StarCraft. They're looking for a fresh game to play.

So, they get the idea to try a Rock, Paper, Scissors tournament.

But the elves are sorta nerdy so they want to accomplish this using TypeScript types. The `WhoWins` should type to correctly determine the winner in a Rock-Paper-Scissors game. The first argument is the opponent and the second argument is you!

### What's Rock, Paper, Scissors?

In case you haven't played it before, basically:

- it's a two player game where each player picks one of three options: Rock (👊🏻), Paper (🖐🏾), and Scissors (✌🏽)
- game rules:
  - Rock crushes Scissors (Rock wins)
  - Scissors cuts Paper (Scissors wins)
  - Paper covers Rock (Paper wins)
  - otherwise, a draw

## Expected Behavior

```ts
type Game01 = WhoWins<'👊🏻', '🖐🏾'> // 'win'
type Game02 = WhoWins<'👊🏻', '✌🏽'> // 'lose'
type Game03 = WhoWins<'👊🏻', '👊🏻'> // 'draw'
type Game04 = WhoWins<'🖐🏾', '👊🏻'> // 'lose'
type Game05 = WhoWins<'🖐🏾', '✌🏽'> // 'win'
type Game06 = WhoWins<'🖐🏾', '🖐🏾'> // 'draw'
type Game07 = WhoWins<'✌🏽', '👊🏻'> // 'win'
type Game08 = WhoWins<'✌🏽', '✌🏽'> // 'draw'
type Game09 = WhoWins<'✌🏽', '🖐🏾'> // 'lose'
```

> Prompt by [Dimitri Mitropoulos](https://github.com/dimitropoulos) of [MiTS](https://www.youtube.com/@MichiganTypeScript).
