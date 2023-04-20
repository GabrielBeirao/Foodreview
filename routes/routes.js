import express  from "express";
import user from "./user.routes.js";
import login from './login.routes.js'

const router = express.Router();

router.use('/user', user); //se o caminho q eu vou utilizar é o /user, eu utilizo o user
router.use('/login', login); //se o caminho q eu vou utilizar é o /login, eu utilizo o login

export default router;
