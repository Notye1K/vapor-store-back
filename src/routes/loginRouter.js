import { Router } from 'express';
import { login } from "../controllers/loginController.js"
import validateLoginSchemaMiddleware from "../middlewares/validateLoginSchemaMiddleware.js"

const loginRouter = Router();

loginRouter.post('/login', validateLoginSchemaMiddleware, login)
export default loginRouter; 