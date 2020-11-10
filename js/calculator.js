const sum = function (number_1, number_2) {
    console.log(number_1 + number_2);
}

// sum (5, 10)

const divigion = function (number_1, number_2) {
    console.log(number_1 / number_2);
}

// divigion (5, 10)

const multiplication = function ( a, b) {
    console.log(a * b);
}

// multiplication (13, 2)

const sub = function (a, b) {
    console.log(a - b);
}

// sub (40, 20)

// +, *, -, /

const calculator = function (number_1, number_2, operator) {
    if (operator === '+') {
        sum (number_1, number_2)
    } else if (operator === '*') {
        multiplication (number_1, number_2)
    } else if (operator === '-') {
        sub (number_1, number_2)
    } else if (operator === '/' && number_2 !== 0) {
        divigion (number_1, number_2)
    } else {console.log('НА 0  ДЕЛИТЬ НЕЛЬЗЯ')}
 }

calculator (10, 10, '+')
calculator (10, 10, '*')
calculator (10, 10, '-')
calculator (10, 0, '/')