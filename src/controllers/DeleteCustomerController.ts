import type { FastifyRequest, FastifyReply } from "fastify";
import { DeleteCustomerService } from "../services/DeleteCustomerService.js";
import { z } from "zod"

const DeleteCustomerSchema = z.object({
    id: z.string()
})

export class DeleteCustomerController {
    async handle(resquest: FastifyRequest, reply: FastifyReply) {

        const { id } = DeleteCustomerSchema.parse(resquest.query)

        const customerService = new DeleteCustomerService()

        const costumer = await customerService.execute({ id })

        reply.send(costumer)
    }
}