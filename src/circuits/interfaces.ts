import { MRData } from "../interfaces.js"

export interface Circuit {
	circuitId: string
	url: string
	circuitName: string
	Location: {
		lat: number
		long: number
		locality: string
		country: string
	}
}

export interface CircuitsResponse extends MRData {
	CircuitTable: {
		Circuits: Circuit[]
	}
}

export interface CircuitResponse extends MRData {
	CircuitTable: {
		circuitId: string
		Circuits: Circuit[]
	}
}
