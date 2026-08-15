class Payment {
    pay() {
        console.log("Processing payment");
    }
}

class CreditCardPayment extends Payment {
    pay() {
        console.log("Paid using Credit Card");
    }
}

class UPIPayment extends Payment {
    pay() {
        console.log("Paid using UPI");
    }
}

const creditCard = new CreditCardPayment();
const upi = new UPIPayment();

creditCard.pay();
upi.pay();