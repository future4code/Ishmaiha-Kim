export interface authenticationData {
   id: string

}

export type user = {
   id: string
   email: string
   name: string
   password: string

}

export type recipe = {
   id: string,
   title: string,
   description: string,
   createdAt: string
   authorId: string
}
