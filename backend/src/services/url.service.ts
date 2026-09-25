import { generateHash } from "../utils/generateHash.js";
import urlModel from "../models/url.model.js";
import { AppError } from "../errors/AppError.js";
import { Url } from '../types/url.types.js'
import { isValidUrl } from "../utils/validateUrl.js";

export const createUrlService = async ( longUrl: string ): Promise<Url> => {
  
  if (!longUrl) {
    throw new AppError("Long URL is required.", 400);
  }

  if(!isValidUrl(longUrl)){
    throw new AppError("Invalid URL.", 400);
  }

  const url = {
    longUrl,
    shortCode: generateHash(),
  };

  const newUrl = await urlModel.create(url);

  return newUrl;
};
