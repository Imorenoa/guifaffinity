import { Router } from "express";

const routes = Router();

// GET /api/gifs
routes.get("/gifs", (req, res, next) => {
  const db = req.context.db;
  const gifs = db.get("memes").take(50).value();
  res.status(200).json(gifs);
});

export default routes;
