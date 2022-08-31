import { Base } from "../base.js"
import { ConstructorResponse, ConstructorsResponse } from "./interfaces.js"

export class Constructors extends Base {
	public teams(year?: number, round?: number, limit?: number) {
		let url = `${this.baseURL}/constructors.json`

		if (year && round) {
			url = `${this.baseURL}/${year}/${round}/constructors.json`
		} else if (year) {
			url = `${this.baseURL}/${year}/constructors.json`
		}

		let params = {}
		if (limit) {
			params = {
				limit: limit,
			}
		}

		return this.get<ConstructorsResponse>(url, params)
	}

	public team(id: string) {
		const url = `${this.baseURL}/constructors/${id}.json`
		return this.get<ConstructorResponse>(url)
	}
}
