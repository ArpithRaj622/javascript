class BankAccount {
    #balance;

    constructor(name, balance) {
        this.#balance = balance;
    }

    deposit(amount) {
        if (amount > 0) {
            this.#balance += amount;
        }
    }

    withdraw(amount) {
        if (amount <= this.#balance) {
            this.#balance -= amount;
        } else {
            console.log("Insufficient balance");
        }
    }

    getBalance() {
        return this.#balance;
    }
}

const account1 = new BankAccount("Arpith", 10000);

account1.deposit(5000);
account1.withdraw(20000);
const balance = account1.getBalance();

console.log(balance);