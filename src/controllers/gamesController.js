import { productsCollection } from '../db.js'

export async function getGames(req, res) {

  try {
    const games = await productsCollection.find({}).toArray()

    console.log(games)
    res.status(200).send(games)

  } catch (error) {
    res.status(500).send(error.message)
  }
}

export async function addGame(req, res) {

  try {
    const name = req.body.name.replace(" ", "-").toLowerCase()
    let game = await productsCollection.findOne({ name })

    if (game) {
      return res.status(409).send("Jogo ja cadastrado")
    }

    game = {
      ...req.body,
      name
    };

    await productsCollection.insertOne(game)

    res.sendStatus(201)

  } catch (error) {
    res.status(500).send(error.message)
  }
}

// const games = [
//   {
//     name: "Elden Ring",
//     img: "https://image.api.playstation.com/vulcan/ap/rnd/202110/2000/phvVT0qZfcRms5qDAk0SI3CM.png",
//     description: "Levante-se, Maculado, e seja guiado pela graça para portar o poder do Anel Prístino e se tornar um Lorde Prístino nas Terras Intermédias.",
//     price: "250.00",
//     genre: "RPG"
//   },
//   {
//     name: "GTA V",
//     img: "https://criticalhits.com.br/wp-content/uploads/2021/05/GTA-5-Online.jpg",
//     description: "Grand Theft Auto V para PC oferece aos jogadores a opção de explorar o gigantesco e premiado mundo de Los Santos e Blaine County em resoluções de até 4K e além, assim como a chance de experimentar o jogo rodando a 60 FPS (quadros por segundo).",
//     price: "69.99",
//     genre: "Mundo Aberto"
//   }
// ]