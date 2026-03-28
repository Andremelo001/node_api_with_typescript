import { prismaClient } from "../lib/prisma.js";

interface UpdateCustomerProps {
    id: string
    name?: string,
    email?: string
}

export class UpdateCustomerService {
    async execute({ id, name, email }: UpdateCustomerProps) {
        try {
            await prismaClient.customer.update({
                where: { id },
                data: {
                    ...(name && { name }),
                    ...(email && { email })
                }
            })

            return { message: "Usuário atualziado com sucesso!"}

        } catch (error) {
            throw new Error("Usuário não encontrado!")
        }
    }
}