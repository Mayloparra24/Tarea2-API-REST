import { z } from "zod";

const schema = z.object({
  text: z.string()
    .trim()
    .nonempty("Búsqueda no puede estar vacía")
    .min(3, "Debe tener al menos 3 carácteres")
    .max(50, "No puede tener más de 50 carácteres")
    .transform(value => value.toLowerCase())
});

export default schema;
