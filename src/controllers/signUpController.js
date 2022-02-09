import bcrypt from 'bcrypt';
import db from '../db.js';

export async function signUp(req, res) {
  try {
    const user = req.body;

    const passwordHash = bcrypt.hashSync(user.password, 10)

    await db.collection("users").insertOne({ ...user, password: passwordHash, entrys: [] })

    res.sendStatus(201)

  } catch (error) {
    res.status(500).send(error.message.details)
  }
}