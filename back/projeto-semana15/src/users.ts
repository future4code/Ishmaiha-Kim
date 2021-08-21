export type Statement = {
    amount: number,
    date: Date,
    description: string
}

export type Users = {
    cpf: string,
    name: string,
    birthdayYear: Date,
    balance: number,
    statement: Statement[]
}

export let user: Users[] = [
    {
        cpf: "111",
        name: "Elias",
        birthdayYear: new Date('10-06-2014'),
        balance: 0,
        statement: []
    },

    {
        cpf: "222",
        name: "Rafael",
        birthdayYear: new Date('10-12-2014'),
        balance: 0,
        statement: []
    },

    {
        cpf: "333",
        name: "Joao",
        birthdayYear: new Date('10-06-2015'),
        balance: 0,
        statement: []
    },

    {
        cpf: "444",
        name: "Lucas",
        birthdayYear: new Date('12-06-2014'),
        balance: 0,
        statement: []
        
    },

    {
        cpf: "555",
        name: "Maria",
        birthdayYear: new Date('10-03-2014'),
        balance: 0,
        statement: []
         
    },

    {
        cpf: "666",
        name: "Luana",
        birthdayYear: new Date('01-06-2014'),
        balance: 0,
        statement: []
        
    },

    {
        cpf: "777",
        name: "Ester",
        birthdayYear: new Date('02-06-2014'),
        balance: 0,
        statement: []
        
    }
]