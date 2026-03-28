import type { FastifyInstance, FastifyPluginOptions, FastifyRequest, FastifyReply } from "fastify";
import { CreateCustomerController } from "./controllers/CreateCustomerController.js";
import { ListCustomersController } from "./controllers/ListCustomersController.js";
import { DeleteCustomerController } from "./controllers/DeleteCustomerController.js";
import { UpdateCustomerController } from "./controllers/UpdateCustomerController.js";

export async function routes(fastify: FastifyInstance, options: FastifyPluginOptions) {

    fastify.post("/create-customer", async (request: FastifyRequest, reply: FastifyReply) => {
        return new CreateCustomerController().handle(request, reply)
    })

    fastify.get("/list-customers", async (request: FastifyRequest, reply: FastifyReply) => {
        return new ListCustomersController().handle(request, reply)
    })

    fastify.delete("/delete-customer", async (request: FastifyRequest, reply: FastifyReply) => {
        return new DeleteCustomerController().handle(request, reply)
    })

    fastify.put("/update-customer", async (request: FastifyRequest, reply: FastifyReply) => {
        return new UpdateCustomerController().handle(request, reply)
    })
}