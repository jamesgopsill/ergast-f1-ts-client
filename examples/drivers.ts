import { FormulaOneClient } from "@jamesgopsill/ergast-f1-ts-client"

const client = new FormulaOneClient(true)

let { ok, data } = await client.drivers(undefined, undefined, 10)
if (ok) {
	console.log(data)
	console.log(data?.DriverTable.Drivers)
}

;({ ok, data } = await client.drivers(2020))
if (ok) {
	console.log(data)
	console.log(data?.DriverTable.Drivers)
}

;({ ok, data } = await client.drivers(2020, 4))
if (ok) {
	console.log(data)
	console.log(data?.DriverTable.Drivers)
}

;({ ok, data } = await client.driver("alonso"))
if (ok) {
	console.log(data)
	console.log(data?.DriverTable)
}
