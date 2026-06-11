import * as mundial from "../../data/mundiales.js";

export const search = (req, res) => {
  const query = req.params.text.toLowerCase();

  const results = mundial.search(query).map(item => item.slug);

  res.json(results);
};
