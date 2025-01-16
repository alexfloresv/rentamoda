"use server";
import { createUserDB } from "./prisma";

export async function createSessionInDB(user: { id: string, name: string }) {
  try {
    console.log(`Intentando crear una sesión para el usuario con ID: ${user.id} y nombre: ${user.name}`);
    
    const createdUser = await createUserDB(user); // Guardar el usuario en la base de datos

    if (createdUser) {
      console.log(`Sesión creada exitosamente para el usuario con ID: ${user.id}`);
      return user.id; // Retornar el token si el usuario fue creado correctamente
    }

    console.log(`No se pudo crear la sesión para el usuario con ID: ${user.id}`);
    return null; // Retornar null si no se pudo crear el usuario
  } catch (error) {
    console.error(`Error al crear la sesión para el usuario con ID: ${user.id}`, error);
    return null; // Retornar null si hubo un error
  }
}