// Helpers
type Address = {
	address: string
	city: string
}

// Solution
export type PresentDeliveryList<T extends Object> = Record<keyof T, Address>
