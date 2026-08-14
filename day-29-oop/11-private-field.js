class BankAccount {
    #balance;

    constructor(name, balance) {
        this.name = name;
        this.#balance = balance;
    }

    deposit(amount) {
        this.#balance += amount;
    }

    getBalance() {
        return this.#balance;
    }
}

const account1 = new BankAccount("Arpith", 10000);

account1.deposit(5000);

const balance = account1.getBalance();

console.log(balance);