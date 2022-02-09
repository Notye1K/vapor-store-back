import bcrypt from "bcrypt"
import { v4 as tokenGenerator } from "uuid"
import db from '../db.js';

export async function login(req, res) {
  try {
    const { email, password } = req.body;
    const user = await db.collection("users").findOne({ email })

    if (!user || !bcrypt.compareSync(password, user.password)) return res.status(401).send("Usuário ou senha inválidos")

    const token = tokenGenerator()

    await db.collection("tokens").insertOne({
      userId: user._id,
      token,
      time: Date.now()
    })

    res.status(200).send({ token, name: user.name })

  } catch (error) {
    res.status(500).send(error.message.details)
  }
}