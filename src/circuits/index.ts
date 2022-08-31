import { Base } from "../base.js"
import { CircuitResponse, CircuitsResponse } from "./interfaces.js"

export class Circuits extends Base {
	public circuits(year?: number, round?: number, limit?: number) {
		let url = `${this.baseURL}/circuits.json`

		if (year && round) {
			url = `${this.baseURL}/${year}/${round}/circuits.json`
		} else if (year) {
			url = `${this.baseURL}/${year}/circuits.json`
		}

		let params = {}
		if (limit) {
			params = {
				limit: limit,
			}
		}

		return this.get<CircuitsResponse>(url, params)
	}

	public circuit(id: string) {
		const url = `${this.baseURL}/circuits/${id}.json`
		return this.get<CircuitResponse>(url)
	}
}
