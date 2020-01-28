import { UserModel } from "../models/UserModel";
import { PostModel } from "../models/PostModel";
import { CommentModel } from "../models/CommentModel";
import { ClientModel } from "../models/ClientModel";

export interface ModelsInterface {
    User: UserModel;
    Post: PostModel;
    Comment: CommentModel;
    Client: ClientModel;
}