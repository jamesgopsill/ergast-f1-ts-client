import { MRData } from "../interfaces.js"

export interface Constructor {
	constructorId: string
	url: string
	name: string
	nationality: string
}

export interface ConstructorsResponse extends MRData {
	ConstructorTable: {
		Constructors: Constructor[]
	}
}

export interface ConstructorResponse extends MRData {
	ConstructorTable: {
		constructorId: string
		Constructors: Constructor[]
	}
}
