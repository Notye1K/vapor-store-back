import { Router } from 'express';
import { getGames } from "../controllers/gamesController.js"
import tokenValidation from '../middlewares/tokenValidation.js'

const gamesRouter = Router();

gamesRouter.get('/games', getGames)
export default gamesRouter;