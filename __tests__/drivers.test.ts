import { FormulaOneClient } from "../src/index.js"

const client = new FormulaOneClient(true)

test(`GET /drivers.json`, async () => {
	const { ok } = await client.drivers()
	expect(ok).toBe(true)
})

test(`GET /driver/alonso.json`, async () => {
	const { ok } = await client.driver("alonso")
	expect(ok).toBe(true)
})
