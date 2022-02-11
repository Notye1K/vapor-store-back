export async function getGames(req, res) {
  const games = [
    {
      name: "Elden Ring",
      img: "https://image.api.playstation.com/vulcan/ap/rnd/202110/2000/phvVT0qZfcRms5qDAk0SI3CM.png",
      description: "Levante-se, Maculado, e seja guiado pela graça para portar o poder do Anel Prístino e se tornar um Lorde Prístino nas Terras Intermédias.",
      price: "250.00",
      genre: "RPG"
    },
    {
      name: "GTA V",
      img: "https://criticalhits.com.br/wp-content/uploads/2021/05/GTA-5-Online.jpg",
      description: "Grand Theft Auto V para PC oferece aos jogadores a opção de explorar o gigantesco e premiado mundo de Los Santos e Blaine County em resoluções de até 4K e além, assim como a chance de experimentar o jogo rodando a 60 FPS (quadros por segundo).",
      price: "69.99",
      genre: "Mundo Aberto"
    }
  ]

  res.status(200).send(games)
}