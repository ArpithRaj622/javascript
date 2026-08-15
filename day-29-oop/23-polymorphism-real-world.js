class Payment {
    pay() {
        console.log("Processing generic payment");
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

function processPayment(payment) {
    payment.pay();
}

const creditCard = new CreditCardPayment();
const upi = new UPIPayment();

processPayment(creditCard);
processPayment(upi);