"use strict";
let myName;
let userName;
userName = "john";
//function
const add = (a, b) => {
    return a + b;
};
const logMsg = (message) => {
    console.log(message);
};
logMsg('siema');
logMsg(add(2, 3));
let subtract = function (c, d) {
    return c - d;
};
//interface mathFunction {
//    (a: number, b:number): number
//} 
let multiply = function (c, d) {
    return c * d;
};
logMsg(multiply(2, 2));
//optional parameters
const addAll = (a, b, c) => {
    if (typeof c !== 'undefined') {
        return a + b + c;
    }
    return a + b;
};
const sumAll = (a = 10, b, c = 2) => {
    return a + b + c;
};
logMsg(addAll(2, 3, 2));
logMsg(addAll(2, 3));
logMsg(sumAll(2, 3));
logMsg(sumAll(undefined, 3));
//Rest parameters
const total = (a, ...nums) => {
    return a + nums.reduce((prev, curr) => prev + curr);
};
logMsg(total(1, 2, 3, 4));
//nigdy nie zwracający 
const createError = (erorMs) => {
    throw new Error(erorMs);
};
const infinite = () => {
    let i = 1;
    while (true) {
        i++;
        if (i > 100)
            break;
    }
};
//custom type guard
const isNumber = (value) => {
    return typeof value === 'number' ? true : false;
};
//use of the never type
const mumberOrString = (value) => {
    if (typeof value === 'string')
        return 'string';
    if (isNumber(value))
        return 'number';
    return createError('to powinno sie nie wydarzyc');
};
