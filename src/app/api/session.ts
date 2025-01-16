import { createSessionInDB } from "./actions"; // Importar función para crear sesión en base de datos

export async function createSession(user: { id: string, name: string }) {
  // Enviar la sesión a la base de datos
  const success = await createSessionInDB(user);

  if (success) {
    return { message: "Sesión creada correctamente" };
  }

  throw new Error("Error al crear la sesión");
}
