export class User {
    private id: string
    public name: string
    public email: string
    public age: number

    constructor(
        userId: string,
        userName: string,
        userEmail: string,
        userAge: number
    ){
        this.id = userId
        this.name = userName
        this.email = userEmail
        this.age = userAge
    }

    public getUserId():string{
        return this.id
    }

    public getUserName():string{
        return this.name
    }

    public setUserName(newName:string){
        this.name = newName
    }

    public getUserEmail():string{
        return this.email
    }

    public setUserEmail(newEmail:string){
        this.name = newEmail
    }

    public getUserAge():number{
        return this.age
    }

    public setUserAge(newAge:number){
        this.age = newAge
    }
}

