import { MRData } from "../interfaces.js"

export interface Driver {
	driverId: string
	url: string
	givenName: string
	familyName: string
	dateOfBirth: string
	nationality: string
	permanentNumber?: string
	code?: string
}

export interface DriversResponse extends MRData {
	DriverTable: {
		Drivers: Driver[]
	}
}

export interface DriverResponse extends MRData {
	DriverTable: {
		driverId: string
		Drivers: Driver[]
	}
}
