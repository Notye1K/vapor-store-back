import { userCollection, salesCollection, productsCollection, ObjectId } from '../db.js';
import dayjs from 'dayjs'

export async function checkout(req, res) {
    try {
        const productsId = await Promise.all(req.body.productsId?.map(async (v) => {
            const productId = await productsCollection.findOne({ name: v })
            if(!productId){
                return 'Invalid productId'
            }
            return productId._id
        }))

        if (!productsId || productsId.includes('Invalid productId')) {
            return res.status(401).send('Invalid productId')
        }

        const tokenId = res.locals.tokenId
        const user = await userCollection.findOne({ _id: tokenId.userId})
        const userId = user._id

        const date = dayjs().format('DD/MM/YYYY')
        await salesCollection.insertOne({date, userId, ...req.body, productsId })
        res.sendStatus(200)
    } catch (error) {
        res.sendStatus(500)
        console.log(error)
    }
}