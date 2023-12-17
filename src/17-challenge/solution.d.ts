// Helpers
type RockPaperScissors = '👊🏻' | '🖐🏾' | '✌🏽'

// Solution
export type WhoWins<P1 extends RockPaperScissors, P2 extends RockPaperScissors> = P1 extends P2
	? 'draw'
	: P1 extends '👊🏻'
		? P2 extends '🖐🏾'
			? 'win'
			: 'lose'
		: P1 extends '🖐🏾'
			? P2 extends '✌🏽'
				? 'win'
				: 'lose'
			: P1 extends '✌🏽'
				? P2 extends '👊🏻'
					? 'win'
					: 'lose'
				: 'draw'
