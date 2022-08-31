import { fetch } from "cross-fetch"

import { HttpResponse } from "./interfaces.js"

export class Base {
	protected baseURL = "http://ergast.com/api/f1"
	public debug: boolean

	constructor(debug: boolean = false) {
		this.debug = debug
	}

	protected async get<T>(url: string, params: { [name: string]: any } = {}) {
		// Add additional search params
		if (Object.keys(params).length !== 0) {
			url += "?" + new URLSearchParams(params).toString()
		}

		if (this.debug) console.log(`|- Query: ${url}`)

		const config: RequestInit = {
			method: "GET",
			mode: "cors",
			headers: {},
		}

		return fetch(url, config).then(async (r: HttpResponse<T>) => {
			if (r.ok) {
				const json = await r.json()
				this.recursiveProcessObject(json)
				r.data = json.MRData
			}
			return r
		})
	}

	protected recursiveProcessObject(obj: any) {
		Object.keys(obj).forEach((key) => {
			// date YYYY-MM-DD
			if (/\d{4}-\d{2}-\d{2}/.test(obj[key])) {
				obj[key] = new Date(obj[key])
				return
			}
			// If the value is a number
			if (!isNaN(obj[key])) {
				if (obj[key].includes(".")) {
					obj[key] = parseFloat(obj[key])
				} else {
					obj[key] = parseInt(obj[key])
				}
				return
			}
			// If it is an array then iterate through the objects and perform the recursive process objects
			if (typeof obj[key] == "object" && Array.isArray(obj[key])) {
				for (const el of obj[key]) {
					// console.log(el)
					this.recursiveProcessObject(el)
				}
			}
			// if it is an object then process it
			if (
				typeof obj[key] == "object" &&
				Array.isArray(obj[key]) == false
			) {
				this.recursiveProcessObject(obj[key])
			}
		})
	}
}
