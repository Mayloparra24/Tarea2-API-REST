import * as mundial from "../../data/mundiales.js";

export const random = (req, res) => {
  res.json(mundial.getRandom());
};
