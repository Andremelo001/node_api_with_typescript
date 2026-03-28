import { prismaClient } from "../lib/prisma.js";

export class ListCustomersService {
    async execute(){

        return await prismaClient.customer.findMany()

    }
}