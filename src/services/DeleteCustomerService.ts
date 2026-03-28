import { prismaClient } from "../lib/prisma.js";

interface DeleteCustomerProps {
    id: string
}

export class DeleteCustomerService {
    async execute({ id }: DeleteCustomerProps){
        if (!id) {
            throw new Error("Informe qual usuário será deletado!")
        }
        
        try {
            await prismaClient.customer.delete({
                where: {
                    id: id
                }
            })

            return { message: "Usuário deletado com sucesso!"}

        } catch {
            throw new Error("Usuário não encontrado!")
        }
    }
}