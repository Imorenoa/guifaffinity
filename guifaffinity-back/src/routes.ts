import { Router } from "express";
import Gif from "./Interfaces/Gif";
import { Meme } from "./DatabaseSchema";

const routes = Router();

// GET /api/gifs
routes.get("/gifs", (req, res, next) => {
  const db = req.context.db;
  const gifsDatabase = db.get("memes").take(50).value();
  const gifs: Gif[] = gifsDatabase.map((gif: Meme) => {
    return {
      id: gif.id,
      src: gif.images.original.url,
      likes: 0,
      date: gif.import_datetime,
      alt: gif.title,
      tags: gif.tags,
    };
  });
  res.status(200).json(gifs);
});

export default routes;
