import { v4 as uuidv4 } from 'uuid';
import { createSessionInDB } from "@/app/api/actions";

export async function generateUserSession() {
  const sessionToken = uuidv4(); // Generamos un token único
  const user = { id: sessionToken, name: 'userView' };

  // Llamar a la función createSession en actions.ts para manejar la creación de la sesión
  const token = await createSessionInDB(user);

  if (token) {
    return token; // Retornamos el token recibido
  } else {
    throw new Error("No se pudo crear la sesión del usuario");
  }
}