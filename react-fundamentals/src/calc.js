function add (inputArr) {
    var res = this.operation(inputArr, function (result, input) {
        return result + input;
    })
    return isNaN(res) ? "Error" : res;
}

function subtract(inputArr) {
    var res = this.operation(inputArr, function (result, input) {
        return result - input;
    })
    return isNaN(res) ? "Error" : res;
}

function divide(inputArr) {
    var res = this.operation(inputArr, function (result, input) {
        return result / input;
    });
    return (res === Infinity) ? "Cannot Divide By Zero" : isNaN(res) ? "Error" : res;
}

function multiple(inputArr) {
    var res = this.operation(inputArr, function (result, input) {
        return result * input;
    });
    return isNaN(res) ? "Error" : res;
}

function modulus(inputArr) {
    var res = this.operation(inputArr, function (result, input) {
        return result % input;
    });
    return isNaN(res) ? "Error" : res ;
}

function exponential(inputArr) {
    var res = this.operation(inputArr, function (result, input) {
        return result ** input;
    });
    return isNaN(res) ? "Error" : res;
}

function operation(inputArr, operator) {
    var result = inputArr.shift();
    for (var i = 0; i < inputArr.length; i++) {
        result = operator(result, inputArr[i]);
    }
    return result;
}

module.exports = { subtract, add, divide, multiple, modulus, exponential, operation}

