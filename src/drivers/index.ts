import { Base } from "../base.js"
import { DriverResponse, DriversResponse } from "./interfaces.js"

export class Drivers extends Base {
	public drivers(year?: number, round?: number, limit?: number) {

		let url = `${this.baseURL}/drivers.json`

		if (year && round) {
			url = `${this.baseURL}/${year}/${round}/drivers.json`
		} else if (year) {
			url = `${this.baseURL}/${year}/drivers.json`
		}
		
		let params = {}
		if (limit) {
			params = {
				limit: limit,
			}
		}
		
		return this.get<DriversResponse>(url, params)
	}

	public driver(id: string) {
		const url = `${this.baseURL}/drivers/${id}.json`
		return this.get<DriverResponse>(url)
	}
}
