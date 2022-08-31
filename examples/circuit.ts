import { FormulaOneClient } from "@jamesgopsill/ergast-f1-ts-client"

const client = new FormulaOneClient(true)

let { ok, data } = await client.circuits(undefined, undefined, 10)
if (ok) {
	console.log(data)
	console.log(data?.CircuitTable.Circuits)
}

;({ ok, data } = await client.circuits(2020))
if (ok) {
	console.log(data)
	console.log(data?.CircuitTable.Circuits)
}

;({ ok, data } = await client.circuits(2020, 4))
if (ok) {
	console.log(data)
	//console.log(data?.DriverTable.Drivers)
}

/*
({ ok, data } = await client.driver("alonso"))
if (ok) {
	console.log(data)
	console.log(data?.DriverTable)
}
*/
