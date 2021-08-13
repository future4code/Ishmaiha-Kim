export type Users = {
    cpf: number,
    name: string,
    birthdayYear: number,
    // transactions: Statement
}

export type Statement = {
    amount: number,
    date: any,
    description: string,
    balance: number
}

export const userBalance: Statement[] = [
    {
        amount: 222222,
        date: "",
        description: "Pagamento fatura nubank",
        balance: 123
    }
]

export let user: Users[] = [
    {
        cpf: 111,
        name: "Elias",
        birthdayYear: 1994,
        // transactions: 
    },

    {
        cpf: 222,
        name: "Rafael",
        birthdayYear: 2007,
        // transactions: []
    },

    {
        cpf: 333,
        name: "Joao",
        birthdayYear: 2010,
        // transactions: []
    },

    {
        cpf: 444,
        name: "Lucas",
        birthdayYear: 1990,
        // transactions: []
    },

    {
        cpf: 555,
        name: "Maria",
        birthdayYear: 2012,
        // transactions: []
    },

    {
        cpf: 666,
        name: "Luana",
        birthdayYear: 2009,
        // transactions: []
    },

    {
        cpf: 777,
        name: "Ester",
        birthdayYear: 2004,
        // transactions: []
    }
]




