import { GraphQLResolveInfo } from "graphql";
import { DbConnection } from "../../../interfaces/DbConnectionInterface";
import { ClientInstance } from "../../../models/ClientModel";
import { Transaction } from "sequelize";
import { handleError, throwError } from "../../../utils/utils";
import { compose } from "../../composable/composable.resolver";
import { authResolvers } from "../../composable/auth.resolver";

export const clientResolvers = {

    Query: {
        clients: (parent, { first = 10, offset = 0 }, {db}: {db: DbConnection}, info: GraphQLResolveInfo) => {
            return db.Client
                .findAll({
                    limit: first,
                    offset: offset
                })
                .catch(handleError);
        },

        client: (parent, {id}, {db}: {db: DbConnection}, info: GraphQLResolveInfo) => {
            id = parseInt(id);
            return db.Client.findById(id)
                .then((client: ClientInstance) => {
                    if(!client) throw new Error(`Client with id ${id} not found!`);
                    return client;
                })
                .catch(handleError);
        }
    },

    Mutation: {
        createClient: compose(...authResolvers)((parent, {input}, {db}: {db: DbConnection}, info: GraphQLResolveInfo) => {
            return db.sequelize.transaction((t: Transaction) => {
                return db.Client
                    .create(input, {transaction: t});
            })
            .catch(handleError);
        }),
        updateClient: compose(...authResolvers)((parent, {id, input}, {db}: {db: DbConnection}, info: GraphQLResolveInfo) => {
            id = parseInt(id);
            return db.sequelize.transaction((t: Transaction) => {
                return db.Client
                    .findById(id)
                    .then((client: ClientInstance) => {
                        throwError(!client, `Client with id ${id} not found!`);
                        return client.update(input, {transaction: t});
                    })
            })
            .catch(handleError);
        }),
        deleteClient: compose(...authResolvers)((parent, {id}, {db}: {db: DbConnection}, info: GraphQLResolveInfo) => {
            id = parseInt(id);
            return db.sequelize.transaction((t: Transaction) => {
                return db.Client
                    .findById(id)
                    .then((client: ClientInstance) => {
                        throwError(!client, `Client with id ${id} not found!`);
                        return client.destroy({transaction: t})
                            .then(client => !!client);
                    })
            })
            .catch(handleError);
        })
    }

};