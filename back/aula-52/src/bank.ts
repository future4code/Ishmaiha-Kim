import { UserAccount } from "./index"

class Bank {
    private accounts: UserAccount[];
  
    constructor(
        accounts: UserAccount[]
    ) {
      //chamando o constructor da classe Bank
      this.accounts = accounts;
    }
  
    getAccounts(){
        return this.accounts
    }

    setAccounts(newAccount: UserAccount){
        this.accounts.push(newAccount)
    }
  }