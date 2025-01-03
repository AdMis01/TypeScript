//classes
//dodawanie widoczności parametrów zmiennych
class Coder{
    //name: string
    //music: string
    //age: number
    //lang: string

    secondLand!: string

    constructor(public readonly name: string, public music: string, private age:number,protected lang: string = 'Typescript'){
        this.name = name
        this.music = music
        this.age = age
        this.lang = lang
    }
    public getAge(){
        return `to jest wiek ${this.age}`
    }
}

const Dave = new Coder("Dave","Rock",42,"pl")
console.log(Dave.getAge())
//console.log(Dave.lang)
//console.log(Dave.age)

class WebDev extends Coder{
    constructor(
        public computer: string,
        name: string,
        music: string,
        age: number
    ){
        super(name,music,age)
        this.computer = computer
    }
    public getLang(){
        return `i write ${this.lang}`
    }
}

const Sara = new WebDev('Mac','sara','lof',25);
console.log(Sara.getLang())

interface Musician{
    name: string,
    instrument: string,
    play(action: string): string
}

class Guitarist implements Musician{
    name: string;
    instrument: string;
    constructor(name: string,instrument:string){
        this.name = name
        this.instrument = instrument
    }

    play(action:string){
        return `${this.name} ${action} ${this.instrument}`
    }
}

const Page = new Guitarist('jimmy','gitara')
console.log(Page.play('strums'));

class Peeps{
    static count: number = 0
    static getCount() : number{
        return Peeps.count
    }

    public id: number
    constructor(public name: string){
        this.name = name
        this.id = ++Peeps.count
    }
}

const Hon = new Peeps('Hon')
const Adam = new Peeps('adam')
const Zbi = new Peeps('zbi')

console.log(Peeps.count)
console.log(Adam.id)

class Bnads {
    private dataState: string[]
    constructor(){
        this.dataState = []
    }
    public get data(): string[]{
        return this.dataState
    }

    public set data(value: string[]){
        if(Array.isArray(value) && value.every(el => typeof el === 'string')){
            this.dataState = value
            return
        }else throw new Error('nie jest to tablica stringów')
    }
}

const MyBands = new Bnads()
MyBands.data = ['negi','led zed']
console.log(MyBands.data)
MyBands.data = [...MyBands.data,'zz bombi']
console.log(MyBands.data)
//MyBands.data = 'tekst'
//MyBands.data = ['zz bombi',45]