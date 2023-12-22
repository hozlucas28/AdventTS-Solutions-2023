# Challenge 21

Tic-Tac-Toe is a two-player game where players alternate marking `❌`s and `⭕`s in a 3x3 grid, aiming to get three in a row.

fun fact: Did you know that tic tac toe is widely considered to be the first computer video game ever created?! That's right! A S Douglas [implemented it](<https://en.wikipedia.org/wiki/OXO_(video_game)>) all the way back in 1952, the same year as the coronation of Queen Elizabeth II.

### Solving Tic Tac Toe

Your goal for this challenge is to use TypeScript types to encode the game logic of Tic Tac Toe. Eventually, every game will end with one of the players winning or a draw.

## Expected Behavior

```ts
type Move01 = TicTacToe<NewGame, 'top-center'>
/*
    {
        board: [
            [ '  ', '❌', '  ' ],
            [ '  ', '  ', '  ' ],
            [ '  ', '  ', '  ' ]
        ];
        state: '⭕';
    }
*/

type InvalidMove = TicTacToe<Move01, 'top-center'>
/*
    {
	    board: [
            ['  ', '❌', '  '],
            ['  ', '  ', '  '],
            ['  ', '  ', '  ']
        ];
	    state: '⭕';
    }
*/

type Move02 = TicTacToe<Move01, 'top-left'>
/*
    {
        board: [
            ['⭕', '❌', '  '],
            ['  ', '  ', '  '],
            ['  ', '  ', '  ']
        ];
        state: '❌';
    }
*/

type Move03 = TicTacToe<Move02, 'middle-center'>
/*
    {
        board: [
            ['⭕', '❌', '  '],
            ['  ', '❌', '  '],
            ['  ', '  ', '  ']
        ];
        state: '⭕';
    }
*/

type Move04 = TicTacToe<Move03, 'bottom-left'>
/*
    {
        board: [
            ['⭕', '❌', '  '],
            ['  ', '❌', '  '],
            ['⭕', '  ', '  ']
        ];
        state: '❌';
    }
*/

type XWin = TicTacToe<Move04, 'bottom-center'>
/*
    {
        board: [
            ['⭕', '❌', '  '],
            ['  ', '❌', '  '],
            ['⭕', '❌', '  ']
        ];
        state: '❌ Won';
    }
*/

type Move05 = TicTacToe<Move04, 'bottom-right'>
/*
    {
        board: [
            ['⭕', '❌', '  '],
            ['  ', '❌', '  '],
            ['⭕', '  ', '❌']
        ];
        state: '⭕';
    }
*/

type OWin = TicTacToe<Move05, 'middle-left'>
/*
    {
        board: [
            ['⭕', '❌', '  '],
            ['⭕', '❌', '  '],
            ['⭕', '  ', '❌']
        ];
        state: '⭕ Won';
    }
*/

type Table = {
	board: [['⭕', '❌', '⭕'], ['⭕', '❌', '❌'], ['❌', '⭕', '  ']]
	state: '⭕'
}

type Draw = TicTacToe<Table, 'bottom-right'>
/*
    {
        board: [
            ['⭕', '❌', '⭕'],
            ['⭕', '❌', '❌'],
            ['❌', '⭕', '⭕']
        ];
        state: 'Draw';
    }
*/
```

> Prompt by [Dimitri Mitropoulos](https://github.com/dimitropoulos) of [MiTS](https://www.youtube.com/@MichiganTypeScript)
