class BankAccount {
    constructor(owner, balance) {
        this.owner = owner;
        this.balance = balance;
    }

    withdraw(amount) {
        if (amount <= this.balance) {
            this.balance -= amount;
            console.log(`Withdrawn : ${amount}`);
            console.log(`Balance : ${this.balance}`);
        } else {
            console.log("Insufficient balance");
            this.getBalance();
        }
    }

    getBalance() {
        console.log(this.balance);
    }
}

const account1 = new BankAccount("Arpith", 10000);

account1.withdraw(15000);