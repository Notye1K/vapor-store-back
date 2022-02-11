import { Router } from 'express';
import authRouter from './authRouter.js'
import productsRouter from './productsRouter.js'
import gamesRouter from './gamesRouter.js';

const router = Router();
router.use(authRouter);
router.use(productsRouter)
router.use(gamesRouter)

export default router;