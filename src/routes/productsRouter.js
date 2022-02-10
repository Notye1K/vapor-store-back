import { Router } from "express"
import schemaValidation from '../middlewares/schemaValidation.js'
import tokenValidation from '../middlewares/tokenValidation.js'
import checkoutSchema from '../schemas/checkoutSchema.js'
import {checkout} from '../controllers/productsController.js'

const productsRouter = Router()

productsRouter.post('/checkout', tokenValidation, schemaValidation(checkoutSchema), checkout)

export default productsRouter