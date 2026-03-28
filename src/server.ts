import { fastify } from "fastify"
import cors from "@fastify/cors"
import { routes } from "./routes.js"

const app = fastify({ logger: true })

app.setErrorHandler((error, request, reply) => {
    if (error instanceof Error) {
        reply.code(400).send({ message: error.message })
    } else {
        reply.code(500).send({ message: "Erro desconhecido" })
    }
})

const start = async () => {

    await app.register(cors)
    await app.register(routes)

    try {
        await app.listen({ port: 3333})
    }catch(err) {
        process.exit(1)
    }
}

start()