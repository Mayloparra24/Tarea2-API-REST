# Copa Mundial FIFA API

API REST con información sobre las ediciones de la Copa Mundial de la FIFA, construida con Node.js, Express y SQLite.

## Requisitos

- Node.js 22+ (para soporte nativo de SQLite)
- pnpm

## Instalación

```bash
pnpm install
```

## Poblar la base de datos

```bash
pnpm createdb
```

Esto crea el archivo `data/mundiales.db` con los datos de las 6 ediciones del Mundial incluidas.

## Ejecutar

### Modo desarrollo (con recarga automática)

```bash
pnpm run dev
```

### Modo producción

```bash
pnpm run start
```

El servidor se ejecuta en `http://localhost:4321/`.

## Endpoints

| Método | Ruta | Descripción |
|--------|------|-------------|
| GET | `/` | Información de la API |
| GET | `/mundiales` | Lista de slugs de los mundiales |
| GET | `/mundiales?include=full` | Lista completa con todos los datos |
| GET | `/mundial/:slug` | Datos de un mundial por slug |
| GET | `/campeon/:pais` | Slugs de los mundiales ganados por un país |
| GET | `/random` | Mundial aleatorio |
| GET | `/search/:text` | Busca mundiales por texto (mín. 3 caracteres) |
| GET | `/imagenes/*` | Imágenes de los mundiales |

## Códigos de respuesta

- `200 OK` — Petición exitosa
- `400 Bad Request` — Validación de entrada falló (Zod)
- `404 Not Found` — Recurso no encontrado o ruta no definida

## Estructura del proyecto

```
├── index.js                  # Servidor Express
├── data/
│   ├── CREATE.SQL            # Esquema SQLite
│   ├── createdb.js           # Script para poblar BD
│   ├── mundiales.db          # Base de datos SQLite (generada)
│   ├── mundiales.js          # Repositorio (consultas SQL)
│   └── mundiales.json        # Datos de origen
├── routes/mundiales/
│   ├── getAll.js             # GET /mundiales
│   ├── getBySlug.js          # GET /mundial/:slug
│   ├── getByCampeon.js       # GET /campeon/:pais
│   ├── random.js             # GET /random
│   ├── search.js             # GET /search/:text
│   └── search.schema.js      # Validación Zod
├── public/imagenes/          # Imágenes de los mundiales
├── .gitignore
└── package.json
```

## Pruebas con xh/httpie

```bash
xh GET :4321/mundiales
xh GET :4321/mundiales include==full
xh GET :4321/mundial/qatar-2022
xh GET :4321/mundial/inexistente    # → 404 JSON
xh GET :4321/campeon/Argentina
xh GET :4321/random
xh GET :4321/search/final
xh GET :4321/search/ab              # → 400 JSON (mínimo 3)
```
