"use strict";
//type casting / type assertions
//convert to more or less specific 
let a = 'hello';
let b = a; //less specific
let c = a; //more specific
let d = 'world';
let e = 'world';
const addOrConcat = (a, b, c) => {
    if (c === 'add')
        return a + b;
    return '' + a + b;
};
let myVal = addOrConcat(2, 2, 'concat');
//ts nie widzi problemu ale string jest zwracany
let nextVal = addOrConcat(2, 2, 'concat');
10;
//DOM
const img = document.querySelector('img');
//const myimg = document.getElementById('#img')!
//wykorzystanie ! mówi ts ze wiemy ze to istnieje i nie będzie to pusta wartość 
const myimg = document.getElementById('#img');
const nextImge = document.getElementById('#img');
img.src;
myimg.src;
