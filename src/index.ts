import { applyMixins } from "./apply-mixins.js"
import { Base } from "./base.js"
import { Circuits } from "./circuits/index.js"
import { Constructors } from "./constructors/index.js"
import { Drivers } from "./drivers/index.js"

class FormulaOneClient extends Base {}
interface FormulaOneClient extends Drivers, Constructors, Circuits {}
applyMixins(FormulaOneClient, [Drivers, Constructors, Circuits])

export { FormulaOneClient as FormulaOneClient }

export * from "./interfaces.js"
export * from "./drivers/interfaces.js"
export * from "./constructors/interfaces.js"
export * from "./circuits/interfaces.js"
