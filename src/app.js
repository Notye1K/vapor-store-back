import express from 'express'
import { json } from 'express'
import cors from 'cors'
import productsRouter from './routers/productsRouter.js'

const app = express()
app.use(json())
app.use(cors())

app.use(productsRouter)

app.listen(process.env.PORT, () => {
    console.log("Server running on port " + process.env.PORT);
});