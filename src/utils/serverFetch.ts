
import { generateUserSession } from "@/app/api/auth";

export async function serverFetch() {
  try {
    // Llamar a generateUserSession para obtener un nuevo token
    const newToken = await generateUserSession();
    return newToken; // Retornar el nuevo token
  } catch (error) {
    console.error("Error generating user session:", error);
    throw new Error("No se pudo generar una nueva sesión de usuario");
  }
}