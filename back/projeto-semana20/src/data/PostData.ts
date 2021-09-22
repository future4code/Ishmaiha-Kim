import { connection } from "./connection";
import { post, toPostModel} from "../model/postModel";

export const createPostData = async (post: post) => {

    await connection('laBook_posts')
    .insert (
        {
            id: post.id,
            selfie: post.selfie,
            description: post.description,
            type: post.type,
            author_id: post.author_id,
            created_At: post.create_At.toISOString().substring(0,10)
        }
    )
}

export const getPostByIdData = async(id:string) => {

    const result = await connection('laBook_posts')
    .select("*")
    .where({id})

    return toPostModel(result[0])
}
