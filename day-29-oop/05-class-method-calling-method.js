class BankAccount {
    constructor(owner, balance) {
        this.owner = owner;
        this.balance = balance
    }

    deposit(amount) {
        this.balance += amount;
        this.getBalance();
    }
    getBalance() {
        console.log(this.balance);
    }
}

const account1 = new BankAccount("Arpith", 10000);

account1.deposit(5000);