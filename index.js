import express from "express";

const app = express();

const HOST = "localhost";
const PORT = 4321;

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

app.listen(PORT, HOST, () => {
  console.log(`Servidor escuchando en http://${HOST}:${PORT}/`);
});
