import { Authenticator } from "../services/authenticator"
import { IdGenerator } from "../services/idGenerator"
import { createPostData, getPostByIdData } from "../data/PostData"

export const createPostBusiness = async({selfie, description, type, token}) => {

    if(!selfie || !description || !type){
        throw new Error ('Complete all fields please!')
    }

    const createdAt = new Date()

    const authenticator = new Authenticator
    const tokenData = authenticator.decodeTokenData (token)

    const idGenerator = new IdGenerator()
    const idPostRandom = idGenerator.generateId()

    const post = await createPostData({
        id:idPostRandom, 
        author_id: tokenData.id, 
        create_At: createdAt, 
        description,
        type, 
        selfie
    })

    return post
    
   

   

}

export const getUserByIdBusiness = async({id}) => {
    try{

    const post = await getPostByIdData(id)

    if(!post){
        throw new Error ('Post not found')
    }

    return post

    } catch (error){
        throw new Error (error.message)
    }
}