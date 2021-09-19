
export enum POST_TYPES {
    NORMAL = 'NORMAL',
    EVENT = 'EVENT'
}

export type post = {
    id: string,
    selfie: string,
    description: string,
    create_At: Date,
    type: POST_TYPES,
    author_id: string
}

export const toPostModel = (obj: any): post => {
    return obj && {
        id: obj.id,
        selfie: obj.selfie,
        description: obj.description,
        type: obj.type,
        author_id: obj.author_id,
        create_At: obj.create_At
    }
}