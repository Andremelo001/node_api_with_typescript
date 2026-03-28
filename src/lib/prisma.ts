import "dotenv/config";
import { PrismaClient } from "../../prisma/generated/prisma/client.js";

const prismaClient = new PrismaClient();

export { prismaClient };