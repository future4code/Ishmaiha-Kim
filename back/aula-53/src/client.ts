export interface Client {
    name: string,
    registrationNumber: number,
    consumedEnergy: number,
    calculateBill(): number
    
}

export const client: Client = {
    name: "goli",
    registrationNumber: 1,
    consumedEnergy: 100,
    calculateBill: () => {
        return 123;
    }
}


