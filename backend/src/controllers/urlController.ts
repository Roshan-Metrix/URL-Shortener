import { Request, Response } from 'express'
import { createUrlService, Url } from '../services/urlServices.js';

export const creatUrlController = async (req: Request, res: Response): Promise<void> => {
    try {
        const create = await createUrlService(req, res);
        console.log(create)
        res.status(200).json({ status: "Ok", message: "This is Url Endpoint.", create })
    } catch (error) {
        console.log("Error in createUrlContoller: ", error);
        res.status(500).json({ status: 'false', message: 'Something went wrong.' })
    }
}