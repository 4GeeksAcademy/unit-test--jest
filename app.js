const sum = (a,b) => {
    return a + b
}

console.log(sum(7,3))



let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}

function fromDollarToYen(amount) {
    
    let amountInEuro = amount / oneEuroIs["USD"];
    
    return amountInEuro * oneEuroIs["JPY"];
}

function fromEuroToDollar(amount) {
    return amount * oneEuroIs["USD"];
}

function fromYenToPound(amount) {
    
    let amountInEuro = amount / oneEuroIs["JPY"];
    
    return amountInEuro * oneEuroIs["GBP"];
}

module.exports = {sum,fromEuroToDollar,fromDollarToYen,fromYenToPound};