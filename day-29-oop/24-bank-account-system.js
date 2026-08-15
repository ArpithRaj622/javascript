class BankAccount {
    #balance;

    constructor(name, accNum, balance) {
        this.name = name;
        this.accNum = accNum;
        this.#balance = balance;
    }

    deposit(amount) {
        if (amount > 0) {
            this.#balance += amount;
            console.log(`Balance : ${this.#balance}`);
        }
    }

    withdraw(amount) {
        this.#balance -= amount;
    }

    getBalance() {
        return this.#balance;
    }
}

class SavingsBankAccount extends BankAccount {
    constructor(name, accNum, balance, interestRate) {
        super(name, accNum, balance);
        this.interestRate = interestRate;
    }

    addInterest() {
        let intrest = this.getBalance() * (this.interestRate / 100);
        console.log(`Added ${this.interestRate}% intrest : ${intrest}`);
        this.deposit(intrest);
    }

    withdraw(amount) {
        if (amount <= this.getBalance()) {
            super.withdraw(amount);
            console.log(`Withdrawn : ${amount}`);
            console.log(`Balance : ${this.getBalance()}`);
        } else {
            console.log("Insufficient balance");
            console.log(`Balance : ${this.getBalance()}`);
        }
    }

}

const account1 = new SavingsBankAccount("Arpith", 666, 10000, 6);

console.log(account1.getBalance());
account1.deposit(5000);
account1.addInterest();
account1.withdraw(10000);