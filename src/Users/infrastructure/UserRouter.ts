import { Router } from "express";
import {createUserController, getByIdUser} from "./dependencies"
import '../../Database/Connection'

const userRouter = Router();

userRouter.post('/', createUserController.run.bind(createUserController));
userRouter.get('/:id', getByIdUser.run.bind(getByIdUser))

export default userRouter