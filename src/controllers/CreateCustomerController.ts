import type { FastifyRequest, FastifyReply } from "fastify";
import { CreateCustomerService } from "../services/CreateCustomerService.js";
import { z } from "zod"

const CreateCustomerSchema = z.object({
    name: z.string(),
    email: z.string()
})

export class CreateCustomerController {
    async handle(resquest: FastifyRequest, reply: FastifyReply) {

        const { name, email } = CreateCustomerSchema.parse(resquest.body)

        const customerService = new CreateCustomerService()

        const costumer = await customerService.execute({ name, email })

        reply.send(costumer)
    }
}