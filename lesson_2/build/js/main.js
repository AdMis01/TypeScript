"use strict";
let stringArray = ['one', 'two', 'three'];
let gitary = ['strat', 'les paul', 5627];
let mixData = ['EVH', 2022, true];
stringArray[0] = "jeden";
stringArray.push("cztery");
gitary[0] = 1900;
gitary.unshift("jimmy");
//gitary = stringArray
//mixData = gitary
let test = [];
let bands = [];
bands.push('van helsing');
//Tuple może mieć tylko tyle wartości ile wpiszemy
let tuple = ['dawid', 42, true];
let mixed = ['jan', 1, false];
mixed = tuple;
//objekty
let myObj = [];
console.log(typeof myObj);
const exampleObje = {
    prop1: 'dave',
    prop2: true,
};
exampleObje.prop1 = 'john';
let evh = {
    name: 'edi',
    albums: [192, 412, 'dsf1']
};
let jp = {
    name: 'jim',
    active: true,
    albums: ['I', 'II', 'IV']
};
//jak w obiektcie zmienna jest opcjonalna to zmiany na niej też muszą być opcjonalne 
const greetGitara = (gitaryList) => {
    if (gitaryList.name) {
        return `hello ${gitaryList.name.toUpperCase()}`;
    }
};
console.log(greetGitara(jp));
//enums - nie ma tego w javascripcie ale jest tworzone na zywo w typescripcie 
var Grade;
(function (Grade) {
    Grade[Grade["A"] = 5] = "A";
    Grade[Grade["B"] = 6] = "B";
    Grade[Grade["C"] = 7] = "C";
    Grade[Grade["D"] = 8] = "D";
    Grade[Grade["E"] = 9] = "E";
})(Grade || (Grade = {}));
console.log(Grade.C);
