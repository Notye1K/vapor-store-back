import { Router } from 'express';
import loginRouter from './loginRouter.js'
import signUpRouter from './signUpRouter.js';

const router = Router();
router.use(loginRouter);
router.use(signUpRouter);

export default router;