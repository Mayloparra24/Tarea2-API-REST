import express from "express";

import { getAll } from "./routes/mundiales/getAll.js";
import { getBySlug } from "./routes/mundiales/getBySlug.js";
import { getByCampeon } from "./routes/mundiales/getByCampeon.js";
import { random } from "./routes/mundiales/random.js";
import { search } from "./routes/mundiales/search.js";

const app = express();

const HOST = "localhost";
const PORT = 4321;

app.enable("strict routing");

app.get("/", (req, res) => {
  res.json({
    api: "Copa Mundial FIFA API",
    version: "1.0.0",
    description: "API REST con información sobre las ediciones de la Copa Mundial de la FIFA",
    endpoints: [
      "/mundiales",
      "/mundial/:slug",
      "/campeon/:pais",
      "/random",
      "/search/:text"
    ]
  });
});

app.get("/mundiales", getAll);
app.get("/mundial/:slug", getBySlug);
app.get("/campeon/:pais", getByCampeon);
app.get("/random", random);
app.get("/search/:text", search);

app.listen(PORT, HOST, () => {
  console.log(`Servidor escuchando en http://${HOST}:${PORT}/`);
});
