import {Request, Response} from 'express'

export interface Url {
    longUrl: string,
    shortCode: string
}

export const createUrlService = async (req: Request, res: Response) : Promise<Url> => {
    const data = req.body;
    try{
        return data as Url;
    }
    finally{
    }
}