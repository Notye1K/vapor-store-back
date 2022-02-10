import bcrypt from "bcrypt"
import { v4 as tokenGenerator } from "uuid"
import { userCollection, tokensCollection } from '../db.js';

export async function login(req, res) {
    try {
        const { name, password } = req.body;
        const user = await userCollection.findOne({ name })

        if (!user || !bcrypt.compareSync(password, user.password)) return res.status(401).send("Usuário ou senha inválidos")

        const token = tokenGenerator()

        await tokensCollection.insertOne({
            userId: user._id,
            token,
            time: Date.now()
        })

        res.status(200).send({ token, name: user.name })

    } catch (error) {
        res.status(500).send(error.message.details)
    }
}

export async function signUp(req, res) {
    try {
        const user = req.body;

        const passwordHash = bcrypt.hashSync(user.password, 10)

        await userCollection.insertOne({ ...user, password: passwordHash })

        res.sendStatus(201)

    } catch (error) {
        res.status(500).send(error.message.details)
    }
}