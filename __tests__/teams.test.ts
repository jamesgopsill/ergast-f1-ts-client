import { FormulaOneClient } from "../src/index.js"

const client = new FormulaOneClient(true)

test(`GET /constructors.json`, async () => {
	const { ok } = await client.teams()
	expect(ok).toBe(true)
})

test(`GET /driver/adams.json`, async () => {
	const { ok } = await client.team("adams")
	expect(ok).toBe(true)
})
