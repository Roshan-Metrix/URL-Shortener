import express from 'express'
import {Request, Response} from 'express'
import { creatUrlController } from '../controllers/url.controller.js';

const urlRouter = express.Router();

urlRouter.get('/',(req: Request, res: Response) => {
    res.status(200).json({status:"true", message: "This is Url Endpoint."})
})

urlRouter.post('/createUrl',creatUrlController)

export default urlRouter;