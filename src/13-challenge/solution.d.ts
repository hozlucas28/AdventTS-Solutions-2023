// Helpers
type ConstructArr<T extends number, Acc extends 1[] = []> = Acc['length'] extends T ? Acc : ConstructArr<T, [...Acc, 1]>

// Solution
export type DayCounter<
	Start extends number,
	End extends number,
	Count extends number[] = ConstructArr<Start>,
	Acc extends number[] = [...Count, Count['length']],
> = Count['length'] extends End ? Acc[number] : DayCounter<Start, End, Acc>
