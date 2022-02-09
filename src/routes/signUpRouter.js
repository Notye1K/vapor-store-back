import { Router } from 'express';
import { signUp } from "../controllers/signUpController.js"
import validateSignUpSchemaMiddleware from '../middlewares/validateSignUpSchemaMiddleware.js';

const signUpRouter = Router();

signUpRouter.post('/sign-up', validateSignUpSchemaMiddleware, signUp);
export default signUpRouter;