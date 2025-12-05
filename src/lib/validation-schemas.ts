
import { z } from "zod";

export const stringSchema = z.coerce.string({
  invalid_type_error: 'Inválido',
  required_error: 'Obrigatório',
});
