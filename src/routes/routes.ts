import { userController } from '../controller/userController';
import { laudoController } from "../controller/laudoController";
import authMiddleware from '../middlewares/auth'
import { Router } from "express";

const routes = Router();

routes.get('/', (req, res)=>{res.send ("API ON"});
routes.post('/register', new userController().handle);
routes.post('/auth', new userController().auth);
routes.post('/laudo', new laudoController().handle).use(authMiddleware);
routes.get('/findDroga', new laudoController().find).use(authMiddleware);


export default routes;
