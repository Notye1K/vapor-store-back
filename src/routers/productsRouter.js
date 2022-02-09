import { Router } from "express"
import schemaValidation from '../middlewares/schemaValidation.js'

const productsRouter = Router()

//productsRouter.post('/checkout', schemaValidation(schema))

export default productsRouter