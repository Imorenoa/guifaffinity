import { Router } from "express";

const routes = Router();

// GET /api/memes
routes.get('/memes', (req, res, next) => {
  const db = req.context.db;
  const memes = db.get("memes").take(50).value();
  res.status(200).json(memes);
  })

export default routes;