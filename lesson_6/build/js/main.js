"use strict";
//Index signatures
const todaysTransactions = {
    pizza: -10,
    books: -5,
    job: 50
};
console.log(todaysTransactions.pizza);
console.log(todaysTransactions['pizza']);
let prop = 'pizza';
console.log(todaysTransactions[prop]);
const todaysNet = (transactions) => {
    let total = 0;
    for (const transaction in transactions) {
        total += transactions[transaction];
    }
    return total;
};
console.log(todaysNet(todaysTransactions));
//todaysTransactions.pizza = 40
console.log(todaysTransactions['dave']);
const student = {
    name: 'dave',
    gpa: 3.5,
    classes: [100, 200]
};
//console.log(student.test)
for (const key in student) {
    console.log(`${key}: ${student[key]}`);
}
Object.keys(student).map(key => {
    console.log(student[key]);
});
const logStudentKey = (student, key) => {
    console.log(`sutdent ${key}: ${student[key]}`);
};
logStudentKey(student, 'gpa');
const monthlyIncome = {
    salary: 500,
    bonus: 100,
    sidehustle: 250
};
for (const revenue in monthlyIncome) {
    console.log(monthlyIncome[revenue]);
}
