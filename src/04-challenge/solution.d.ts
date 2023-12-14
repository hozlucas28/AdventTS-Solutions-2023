// Helpers
type Address = {
	address: string
	city: string
}

// Solution
export type PresentDeliveryList<T extends object> = Record<keyof T, Address>
