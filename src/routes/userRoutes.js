// 1. Routes: 
// Definirá as rotas da API, que são as URLs que os 
// clientes usam para enviar solicitações HTTP para a API.

import { Router } from 'express';
import userController from '../controllers/userController.js';
import {validateSchema} from '../middlewares/schemaValidationMiddleware.js';
import { userSchema } from '../schemas/userSchema.js';


const userRoutes = Router();

userRoutes.post('/', validateSchema(userSchema), userController.create)
// userRoutes.get('/', userController.get)

export default userRoutes;