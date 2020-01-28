const clientTypes = `

    # Client definition type
    type Client {
        id: ID!
        name: String!
        contact: String!
        email: String!
        cpf: String!
        phone: String!
        cellphone: String!
        cep: String!
        street: String!
        number: String!
        complement: String!
        neighborhood: String!
        city: String!
        state: String!
        createdAt: String!
        updatedAt: String!
    }

    input ClientCreateInput {
        name: String!
        contact: String!
        email: String!
        cpf: String!
        phone: String!
        cellphone: String!
        cep: String!
        street: String!
        number: String!
        complement: String!
        neighborhood: String!
        city: String!
        state: String!
    }

    input ClientUpdateInput {
        name: String!
        contact: String!
        email: String!
        cpf: String!
        phone: String!
        cellphone: String!
        cep: String!
        street: String!
        number: String!
        complement: String!
        neighborhood: String!
        city: String!
        state: String!
    }

`;

const clientQueries = `
    clients(first: Int, offset: Int): [ Client! ]!
    client(id: ID!): Client
`;

const clientMutations = `
    createClient(input: ClientCreateInput!): Client
    updateClient(id: ID!, input: ClientUpdateInput!): Client
    deleteClient(id:ID!): Boolean
`;

export {
    clientTypes,
    clientQueries,
    clientMutations
}