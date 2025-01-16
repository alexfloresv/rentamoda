import { NextRequest, NextResponse } from "next/server";
import { serverFetch } from "@/utils/serverFetch";

export default async function middleware(req: NextRequest) {
  const token = req.cookies.get('token'); // Obtener el token de las cookies

  if (!token) {
    try {
      const newToken = await serverFetch(); // Generar un nuevo token
      const response = NextResponse.next(); // Continuar con la solicitud
      response.cookies.set('token', newToken); // Almacenar el nuevo token en las cookies
      return response;
    } catch (error) {
      console.error("Error in middleware:", error);
      return NextResponse.redirect(new URL('/home', req.url)); // Redirigir a la página de inicio
    }
  }

  // Si hay un token válido, continuar con la solicitud
  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'], // Esto aplica el middleware a todas las rutas excepto a las de API y estáticas
};