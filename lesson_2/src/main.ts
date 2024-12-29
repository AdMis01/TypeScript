let stringArray = ['one','two','three']

let gitary = ['strat','les paul', 5627]

let mixData = ['EVH',2022,true]

stringArray[0] = "jeden"
stringArray.push("cztery")

gitary[0] = 1900
gitary.unshift("jimmy")

//gitary = stringArray
//mixData = gitary

let test = []
let bands: string[] = []
bands.push('van helsing')


//Tuple może mieć tylko tyle wartości ile wpiszemy
let tuple: [string,number,boolean] = ['dawid',42,true]

let mixed = ['jan',1,false]

mixed = tuple

//objekty

let myObj: object = []
console.log(typeof myObj)

const exampleObje = {
    prop1: 'dave',
    prop2: true,
}

exampleObje.prop1 = 'john'
//DODANIE ? zmienia na niewymagane i nowe obiekty nie muszą posiadać tego 
type GitaryList = {
    name: string,
    active?: boolean,
    albums: (string | number)[]
}

let evh: GitaryList = {
    name: 'edi',
    active: false,
    albums: [192,412,'dsf1']
}

let jp: GitaryList = {
    name: 'jim',
    active: true,
    albums: ['I','II','IV']
}

evh = jp