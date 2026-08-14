class BankAccount {
    constructor(owner, balance) {
        this.owner = owner;
        this.balance = balance
    }

    deposit(amount) {
        this.balance += amount;
    }
    withdraw(amount) {
        this.balance -= amount;
    }
    getBalance() {
        console.log(this.balance);
    }
}

const account1 = new BankAccount("Arpith", 20000);

account1.deposit(5000);
account1.withdraw(8000);
account1.getBalance();