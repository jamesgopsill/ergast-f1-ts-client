import { FormulaOneClient } from "@jamesgopsill/ergast-f1-ts-client"

const client = new FormulaOneClient(true)

let { ok, data } = await client.teams(undefined, undefined, 10)
if (ok) {
	console.log(data)
	console.log(data?.ConstructorTable.Constructors)
}

;({ ok, data } = await client.teams(2020))
if (ok) {
	console.log(data)
	console.log(data?.ConstructorTable.Constructors)
}

;({ ok, data } = await client.teams(2020, 4))
if (ok) {
	console.log(data)
	console.log(data?.ConstructorTable.Constructors)
}

;({ ok, data } = await client.team("adams"))
if (ok) {
	console.log(data)
	console.log(data?.ConstructorTable)
}
