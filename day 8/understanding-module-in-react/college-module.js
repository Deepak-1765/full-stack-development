let myFees = 0;

function payFee(payment) {
    console.log(`Paying fee of ${payment} is paid`);
    myFees = payment;
}

function getFees() {
    return myFees;
}

export { payFee, getFees };