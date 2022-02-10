import { userCollection, salesCollection, productsCollection, ObjectId } from '../db.js';
import dayjs from 'dayjs'

export async function checkout(req, res) {
    try {
        if (req.body.productId.length !== 24) {
            return res.status(401).send('Invalid productId')
        }
        const productId = await productsCollection.findOne({ _id: new ObjectId(req.body.productId)})
        if(!productId){
            return res.status(401).send('Invalid productId')
        }
        const tokenId = res.locals.tokenId
        const user = await userCollection.findOne({ _id: tokenId.userId})
        console.log(user);
        const userId = user._id

        const date = dayjs().format('DD/MM/YYYY')
        await salesCollection.insertOne({date, userId, ...req.body, productId: productId._id })
        res.sendStatus(200)
    } catch (error) {
        res.sendStatus(500)
        console.log(error)
    }
}