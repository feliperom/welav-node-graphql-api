import * as Sequelize from 'sequelize';
import { BaseModelInterface } from '../interfaces/BaseModelInterface';
import { ModelsInterface } from '../interfaces/ModelsInterface';

export interface ClientAttributes {
    id?: number;
    name?: string;
    contact?: string;
    email?: string;
    cpf?: string;
    phone?: string;
    cellphone?: string;
    cep?: string;
    street?: string;
    number?: string;
    complement?: string;
    neighborhood?: string;
    city?: string;
    state?: string;
    createdAt?: string;
    updatedAt?: string;
}

export interface ClientInstance extends Sequelize.Instance<ClientAttributes>, ClientAttributes {
    isPassword(encodedPassword: string, password: string): boolean;
}

export interface ClientModel extends BaseModelInterface, Sequelize.Model<ClientInstance, ClientAttributes> {}

export default (sequelize: Sequelize.Sequelize, DataTypes: Sequelize.DataTypes): ClientModel => {
    const Client: ClientModel = 
        sequelize.define('Client', {
            id: {
                type: DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true,
                autoIncrement: true
            },
            name: {
                type: DataTypes.STRING(128),
                allowNull: false
            },
            contact: {
                type: DataTypes.STRING(128),
                allowNull: false
            },
            email: {
                type: DataTypes.STRING(128),
                allowNull: false,
                unique: true
            },
            cpf: {
                type: DataTypes.STRING(128),
                allowNull: true,
                defaultValue: null
            },
            phone: {
                type: DataTypes.STRING(128),
                allowNull: true,
                defaultValue: null
            },
            cellphone: {
                type: DataTypes.STRING(128),
                allowNull: false
            },
            cep: {
                type: DataTypes.STRING(128),
                allowNull: false
            },
            street: {
                type: DataTypes.STRING(128),
                allowNull: false
            },
            number: {
                type: DataTypes.STRING(128),
                allowNull: false,
            },
            complement: {
                type: DataTypes.STRING(128),
                allowNull: true,
                defaultValue: null
            },
            neighborhood: {
                type: DataTypes.STRING(128),
                allowNull: false,
            },
            city: {
                type: DataTypes.STRING(128),
                allowNull: false,
            },
            state: {
                type: DataTypes.STRING(128),
                allowNull: false,
            },
        }, {
            tableName: 'clients',
        });
        
    return Client;
}