"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user_schema_1 = require("./resources/user/user.schema");
const post_schema_1 = require("./resources/post/post.schema");
const comment_schema_1 = require("./resources/comment/comment.schema");
const client_schema_1 = require("./resources/client/client.schema");
const Query = `
    type Query {
        ${client_schema_1.clientQueries}
        ${comment_schema_1.commentQueries}
        ${post_schema_1.postQueries}
        ${user_schema_1.userQueries}
    }
`;
exports.Query = Query;
