import { userQueries } from './resources/user/user.schema';
import { postQueries } from './resources/post/post.schema';
import { commentQueries } from './resources/comment/comment.schema';
import { clientQueries } from './resources/client/client.schema';

const Query = `
    type Query {
        ${clientQueries}
        ${commentQueries}
        ${postQueries}
        ${userQueries}
    }
`;

export {
    Query
}