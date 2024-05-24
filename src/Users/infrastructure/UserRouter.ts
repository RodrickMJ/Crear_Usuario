import { Router } from "express";
import {createUserController, getByIdUser} from "./dependencies"

const userRouter = Router();

userRouter.post('/', createUserController.run.bind(createUserController));
userRouter.get('/:id', getByIdUser.run.bind(getByIdUser))