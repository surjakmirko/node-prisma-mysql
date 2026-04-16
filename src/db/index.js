import { PrismaClient } from "./client.ts";
import { PrismaMariaDb } from "@prisma/adapter-mariadb";

const adapter = new PrismaMariaDb({
  host: "mysql-3095914b-surjakmirko.i.aivencloud.com",
  user: "avnadmin",
  database: "defaultdb",
});
export const prisma = new PrismaClient({ adapter });