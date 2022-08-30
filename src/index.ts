import { applyMixins } from "./apply-mixins.js"
import { Base } from "./base.js"
import { Drivers } from "./drivers/index.js"
import { Constructors } from "./constructors/index.js"

class FormulaOneClient extends Base {}
interface FormulaOneClient extends Drivers, Constructors {}
applyMixins(FormulaOneClient, [Drivers, Constructors])

export { FormulaOneClient as FormulaOneClient }

export * from "./interfaces.js"
export * from "./drivers/interfaces.js"
export * from "./constructors/interfaces.js"
