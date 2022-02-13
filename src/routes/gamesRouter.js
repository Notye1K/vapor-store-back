import { Router } from 'express';
import { getGames, getSingleGame, addGame } from "../controllers/gamesController.js"
import tokenValidation from '../middlewares/tokenValidation.js'
import schemaValidation from '../middlewares/schemaValidation.js'
import gameSchema from '../schemas/gameSchema.js'

const gamesRouter = Router();

gamesRouter.get('/games', tokenValidation, getGames)
gamesRouter.get('/games/:gameName', tokenValidation, getSingleGame)
gamesRouter.post('/games', schemaValidation(gameSchema), addGame)
export default gamesRouter;