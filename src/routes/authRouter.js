import { Router } from 'express';
import { login, signUp } from "../controllers/authController.js"
import schemaValidation from "../middlewares/schemaValidation.js"
import loginSchema from "../schemas/loginSchema.js"
import signUpSchema from "../schemas/signUpSchema.js";

const authRouter = Router();

authRouter.post('/login', schemaValidation(loginSchema), login)
authRouter.post('/sign-up', schemaValidation(signUpSchema), signUp);
export default authRouter;