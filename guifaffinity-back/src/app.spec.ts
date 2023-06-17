import createApp from "./app";
import request from "supertest";
import { Express } from "express";
import dbData from "./fixtures/db.json";
import low from "lowdb";
import Memory from "lowdb/adapters/Memory";
import { DatabaseSchema } from "./DatabaseSchema";

describe("GET /api/gifs", () => {
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
});
