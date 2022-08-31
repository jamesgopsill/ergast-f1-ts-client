import { FormulaOneClient } from "../src/index.js"

const client = new FormulaOneClient(true)

test(`GET /circuits.json`, async () => {
	const { ok } = await client.circuits()
	expect(ok).toBe(true)
})

test(`GET /driver/silverstone.json`, async () => {
	const { ok } = await client.circuit("silverstone")
	expect(ok).toBe(true)
})
