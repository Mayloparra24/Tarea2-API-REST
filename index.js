import express from "express";
import data from "./data/mundiales.json" with { type: "json" };

const app = express();

const HOST = "localhost";
const PORT = 4321;

app.enable("strict routing");

const notFound = (res, message) => {
  return res.status(404).json({ error: message });
};

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

app.get("/mundiales", (req, res) => {
  const isFull = req.query.include === "full";
  const contents = isFull
    ? data
    : data.map(item => item.slug);
  res.json(contents);
});

app.get("/mundial/:slug", (req, res) => {
  const mundial = data.find(item => item.slug === req.params.slug);

  if (!mundial)
    return notFound(res, "Mundial no encontrado");

  res.json(mundial);
});

app.get("/campeon/:pais", (req, res) => {
  const mundiales = data
    .filter(item => item.campeon === req.params.pais)
    .map(item => item.slug);

  res.json(mundiales);
});

app.get("/random", (req, res) => {
  const i = Math.floor(Math.random() * data.length);
  res.json(data[i]);
});

app.get("/search/:text", (req, res) => {
  const query = req.params.text.toLowerCase();

  const results = data
    .filter(mundial => {
      const json = JSON.stringify(mundial).toLowerCase();
      return json.includes(query);
    })
    .map(mundial => mundial.slug);

  res.json(results);
});

app.listen(PORT, HOST, () => {
  console.log(`Servidor escuchando en http://${HOST}:${PORT}/`);
});
