import type { FastifyRequest, FastifyReply } from "fastify";
import { UpdateCustomerService } from "../services/UpdateCustomerService.js";
import { z } from "zod"

const UpdateCustomerQuerySchema = z.object({
    id: z.string()
})

const UpdateCustomerBodySchema = z.object({
    name: z.string().optional(),
    email: z.string().optional()
})

export class UpdateCustomerController {
    async handle(request: FastifyRequest, reply: FastifyReply) {
        const { id } = UpdateCustomerQuerySchema.parse(request.query)

        const { name, email } = UpdateCustomerBodySchema.parse(request.body)

        const customerService = new UpdateCustomerService()

        const customer = await customerService.execute({
            id,
            ...(name !== undefined && { name }),
            ...(email !== undefined && { email })
        })
        
        reply.send(customer)
    }
}