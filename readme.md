# API de Clientes com Fastify + TypeScript

Este projeto foi desenvolvido com foco em aprendizado prático para aperfeiçoar conceitos de Node.js com Fastify e introduzir conceitos fundamentais de TypeScript em uma API real integrando persistência de dados com Prisma e MongoDB.

## Conceitos praticados

1. Criação de servidor HTTP com Fastify.
2. Tipagem estática com TypeScript.
3. Separação de responsabilidades entre camadas.
4. Validação de entrada com Zod.
5. Tratamento de erros centralizado.
6. Integração com banco de dados usando Prisma.

## Pré-requisitos

- Node.js 18+
- npm
- string de conexão MongoDB

## Configuração do ambiente

1. Instale as dependências:

```bash
npm install
```

2. Crie o arquivo `.env` na raiz do projeto:

```env
DATABASE_URL="sua_string_de_conexao_mongodb"
```

3. Gere o client do Prisma:

```bash
npx prisma generate
```

4. Sincronize o schema com o banco:

```bash
npx prisma db push
```

5. Inicie a aplicação em desenvolvimento:

```bash
npm run dev
```

A API será iniciada na porta `3333`.

## Endpoints

### Criar cliente

- Método: `POST`
- Rota: `/create-customer`
- Body:

```json
{
	"name": "Andre",
	"email": "andre@email.com"
}
```

### Listar clientes

- Método: `GET`
- Rota: `/list-customers`

### Atualizar cliente

- Método: `PUT`
- Rota: `/update-customer?id=<customerId>`
- Body (parcial):

```json
{
	"name": "Novo nome",
	"email": "novo@email.com"
}
```

### Deletar cliente

- Método: `DELETE`
- Rota: `/delete-customer?id=<customerId>`