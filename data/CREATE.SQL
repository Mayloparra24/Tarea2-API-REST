CREATE TABLE mundiales (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  nombre TEXT NOT NULL,
  anio INTEGER NOT NULL,
  sede TEXT NOT NULL,
  campeon TEXT NOT NULL,
  subcampeon TEXT NOT NULL,
  goleador TEXT,
  equipos INTEGER,
  imagen TEXT,
  slug TEXT UNIQUE NOT NULL,
  resumen TEXT,
  descripcion TEXT
);
