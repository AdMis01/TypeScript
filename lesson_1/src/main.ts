let username = "test"
console.log(username)


//let a = 12
//let b = '6'
//let c = 2

let a:number = 12
let b:number = 6
let c:number = 2

//widzi błąd ale i tak pokazuje wynik mimo że to nie jest wykonalne w normalnym js
// a po przemianie 
console.log(a / b)

console.log(c * b)

let myName: string;
let meaning: number;
let isLoad: boolean;
let album: any;
//let album: string | number;



myName = 'adam'
myName = 'jan'

meaning = 43
isLoad = false

album = 'przyjmie wszystko'

const sum = (a: number,b: number) => {
    return a + b
}

let postId: string | number
let isActive: number | boolean
//let isActive: number | boolean | string
let re: RegExp = /\w+/g;