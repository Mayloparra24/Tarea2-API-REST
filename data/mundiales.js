import data from "./mundiales.json" with { type: "json" };

export const getAll = () => data;

export const getBySlug = slug => data.find(item => item.slug === slug);

export const getByCampeon = pais => data.filter(item => item.campeon === pais);

export const getRandom = () => {
  const index = Math.floor(Math.random() * data.length);
  return data[index];
};

export const search = (text) => {
  const query = text.toLowerCase();
  return data.filter(item =>
    JSON.stringify(item).toLowerCase().includes(query)
  );
};
