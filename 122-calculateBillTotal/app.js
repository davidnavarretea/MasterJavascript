function calculateBillTotal(preTaxAndTipAmount) {
    tax = preTaxAndTipAmount * 0.095;
    propina = preTaxAndTipAmount * 0.15;
    return preTaxAndTipAmount + tax + propina;
}
var output = calculateBillTotal(20);
console.log(output); // --> 24.9