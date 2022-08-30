# A Typescript client for the Ergast Formula One API.

# Installation

# Example

```
import { FormulaOneClient } from "jamesgopsill/ergast-f1-ts-client"

const client = new FormulaOneClient(true)

const { ok, data } = await client.drivers()
if (ok) {
	console.log(data)
}
```

## Links

- [Installing NPM Packages from GitHub](https://www.pluralsight.com/guides/install-npm-packages-from-gitgithub)
- [PNPM](https://pnpm.io/)