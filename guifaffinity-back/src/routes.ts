import { Response, Router } from "express";
import Gif from "./Interfaces/Gif";
import { Meme } from "./DatabaseSchema";

const routes = Router();

const filterGifsByTag = (databaseGifs: Meme[], tag: string) => {
  return databaseGifs.filter((gif) => gif.tags.includes(`#${tag}`));
};

const returnGifsByTag = (gifs: Meme[], tag: string, res: Response) => {
  const gifsByTag = filterGifsByTag(gifs, tag);
  const gifsClient: Gif[] = convertToGifsClient(gifsByTag);
  res.status(200).json(gifsClient);
};

const convertToGifsClient = (gifs: Meme[]) => {
  return gifs.map((gif) => ({
    id: gif.id,
    src: gif.images.original.url,
    likes: 0,
    date: gif.import_datetime,
    alt: gif.title,
    tags: gif.tags,
  }));
};

// GET /api/gifs
routes.get("/gifs", (req, res, next) => {
  console.log('hola');
  
  const tag = req.query.tag as string;
  const db = req.context.db;
  const gifsDatabase = db.get("memes").take(50).value()
  if (tag) {
    returnGifsByTag(gifsDatabase, tag, res);
    return;
  }
  const gifsClient: Gif[] = convertToGifsClient(gifsDatabase);
  res.status(200).json(gifsClient);
});

//GET /api/gifs/:id
routes.get("/gifs/:id", (req, res, next) => { 
  const db = req.context.db;
  const gif = db.get("memes").find((gif) => gif.id == req.params.id);
  if (gif != undefined) {
    // const gifClient: Gif = convertToGifClient(gif);
    // res.status(200).json(gifClient);
    res.status(200).json(gif);
  } else {
    res.status(404).json({ error: "GIF not found"});
  }
});

export default routes;
