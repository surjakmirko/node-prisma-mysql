estoy renegando con prisma, mysql y la db en la nube

PRIMERO INSTALLE PRISMA
configure para que sea mysql y cree los modelos
configure la confg de primsa para la conexion
ejecute prisma migrate y me creeo la carpeta migrate en prisma

y aca empece a renegar con PrismaCliente

hice prisma generate
y me generate una carpeta en src con cosas de prisma
pero no me deja usar el prismaClient

entonces en la docs de prisma vi q necesitaba un archivo donde se configuraba el prismaClient
entonces creee en db, index.js
ahi configuro el client con mariaDB

y en mis controladores ahora puedo usar prisma.

pero estoy renegando con el port
