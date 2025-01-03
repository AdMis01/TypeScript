"use strict";
//classes
//dodawanie widoczności parametrów zmiennych
class Coder {
    constructor(name, music, age, lang = 'Typescript') {
        this.name = name;
        this.music = music;
        this.age = age;
        this.lang = lang;
        this.name = name;
        this.music = music;
        this.age = age;
        this.lang = lang;
    }
    getAge() {
        return `to jest wiek ${this.age}`;
    }
}
const Dave = new Coder("Dave", "Rock", 42, "pl");
console.log(Dave.getAge());
//console.log(Dave.lang)
//console.log(Dave.age)
class WebDev extends Coder {
    constructor(computer, name, music, age) {
        super(name, music, age);
        this.computer = computer;
        this.computer = computer;
    }
    getLang() {
        return `i write ${this.lang}`;
    }
}
const Sara = new WebDev('Mac', 'sara', 'lof', 25);
console.log(Sara.getLang());
class Guitarist {
    constructor(name, instrument) {
        this.name = name;
        this.instrument = instrument;
    }
    play(action) {
        return `${this.name} ${action} ${this.instrument}`;
    }
}
const Page = new Guitarist('jimmy', 'gitara');
console.log(Page.play('strums'));
class Peeps {
    static getCount() {
        return Peeps.count;
    }
    constructor(name) {
        this.name = name;
        this.name = name;
        this.id = ++Peeps.count;
    }
}
Peeps.count = 0;
const Hon = new Peeps('Hon');
const Adam = new Peeps('adam');
const Zbi = new Peeps('zbi');
console.log(Peeps.count);
console.log(Adam.id);
class Bnads {
    constructor() {
        this.dataState = [];
    }
    get data() {
        return this.dataState;
    }
    set data(value) {
        if (Array.isArray(value) && value.every(el => typeof el === 'string')) {
            this.dataState = value;
            return;
        }
        else
            throw new Error('nie jest to tablica stringów');
    }
}
const MyBands = new Bnads();
MyBands.data = ['negi', 'led zed'];
console.log(MyBands.data);
MyBands.data = [...MyBands.data, 'zz bombi'];
console.log(MyBands.data);
//MyBands.data = 'tekst'
//MyBands.data = ['zz bombi',45]
