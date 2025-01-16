import { PrismaClient } from '@prisma/client';

// Asegúrate de que estás usando Prisma Accelerate
const prisma = new PrismaClient({
  log: ['query'],
  datasources: {
    db: {
      url: process.env.DATABASE_URL,
    },
  },
});

export default prisma;


//CREATE USER 'user'@'localhost' IDENTIFIED BY 'user';
//GRANT ALL PRIVILEGES ON dbrentamoda.* TO 'user'@'localhost';
//credenciales para usar la base de datos
//usuario: root
//contraseña: root
//base de datos: dbrentamoda
//mysql -u root -p
//GRANT ALL PRIVILEGES ON *.* TO 'user'@'localhost';
//FLUSH PRIVILEGES;
//npx prisma migrate dev