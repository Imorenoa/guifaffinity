import createApp from "./app";
import request from "supertest";
import { Express } from "express";
import dbData from "./fixtures/db.json";
import low from "lowdb";
import Memory from "lowdb/adapters/Memory";
import { DatabaseSchema, Meme } from "./DatabaseSchema";
import Gif from "./Interfaces/Gif";

describe("GET /api/gifs/:id", () => {
  let app: Express;
  const gif: Gif = {
    id: "YleuWir5NTNVXkflSp",
    src: "https://media4.giphy.com/media/YleuWir5NTNVXkflSp/giphy.gif?cid=be655fb7f245f7d29df0fc743b70e3ee884dbaf31956e789&rid=giphy.gif",
    likes: 4,
    date: "2020-08-20 02:24:22",
    alt: "Movie Brazil GIF by MOODMAN",
    tags: ["#movie", "#brazil", "#brazil the movie"],
  };
  const id: string = 'YleuWir5NTNVXkflSp';

  // Before each test
  beforeEach(async () => {
    const adapter = new Memory<DatabaseSchema>("");
    const db = low(adapter);
    await db.defaults(dbData).write();
    app = createApp(db);
  });

  it("responds with OK", async () => {
    await request(app).get("/api/gifs/" + gif.id).expect(200);
  });

  it("responds with specified interface", async () => {
    const response = await request(app).get("/api/gifs/" + gif.id);

    const props: string[] = Object.keys(gif);
    const returnedGif: Gif = response.body
    props.forEach((prop) => {
        expect(returnedGif).toHaveProperty(prop);
    });
  });
})

describe("GET /api/gifs", () => {
  const gif: Gif = {
    id: "YleuWir5NTNVXkflSp",
    src: "https://media4.giphy.com/media/YleuWir5NTNVXkflSp/giphy.gif?cid=be655fb7f245f7d29df0fc743b70e3ee884dbaf31956e789&rid=giphy.gif",
    likes: 4,
    date: "2020-08-20 02:24:22",
    alt: "Movie Brazil GIF by MOODMAN",
    tags: ["#movie", "#brazil", "#brazil the movie"],
  };

  let app: Express;

  // Before each test
  beforeEach(async () => {
    const adapter = new Memory<DatabaseSchema>("");
    const db = low(adapter);
    await db.defaults(dbData).write();
    app = createApp(db);
  });

  it("responds with OK", async () => {
    await request(app).get("/api/gifs").expect(200);
  });

  it("responds with an array", async () => {
    const response = await request(app).get("/api/gifs");
    expect(response.body).toBeInstanceOf(Array);
  });

  it("responds with 50 elements", async () => {
    const response = await request(app).get("/api/gifs");
    expect(response.body).toHaveLength(50);
  });

  it("responds with specified interface", async () => {
    const response = await request(app).get("/api/gifs");

    const props: string[] = Object.keys(gif);
    response.body.forEach((returnedGif: Gif) => {
      props.forEach((prop) => {
        expect(returnedGif).toHaveProperty(prop);
      });
    });
  });

  it("responds filtered by tag", async () => {
    const tag = "movie";
    const response = await request(app).get(`/api/gifs?tag=${tag}`);

    response.body.forEach((returnedGif: Gif) => {
      expect(returnedGif.tags).toContain(`#${tag}`);
    });
  });
});
