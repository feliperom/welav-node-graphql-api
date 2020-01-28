import { userMutations } from './resources/user/user.schema';
import { postMutations } from './resources/post/post.schema';
import { commentMutations } from './resources/comment/comment.schema';
import { tokenMutations } from './resources/token/token.schema';
import { clientMutations } from './resources/client/client.schema';

const Mutation = `
    type Mutation {
        ${clientMutations}
        ${commentMutations}
        ${postMutations}
        ${tokenMutations}
        ${userMutations}
    }
`;

export {
    Mutation
}