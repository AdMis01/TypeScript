type stringOrNumber = string | number
type stringOrNumberArray = (string | number)[]

type GitaryList = {
    name: string,
    active?: boolean,
    albums: (string | number)[]
}

type UserId = stringOrNumber

type PostId = stringOrNumber

let myName: 'dave'
let userName: 'dave' | 'john' | 'amy'

userName = "john"

//function

const add = (a:number,b:number):number => {
    return a + b
}

const logMsg = (message: any):void => {
    console.log(message)
}

logMsg('siema')
logMsg(add(2,3))

let subtract = function (c: number,d:number):number{
    return c-d
}

type mathFunction = (a: number, b:number) => number
//interface mathFunction {
//    (a: number, b:number): number
//} 
    

let multiply: mathFunction = function (c,d){
    return c*d
}

logMsg(multiply(2,2))

//optional parameters

const addAll = (a: number, b: number,c?:number):number =>{
    if(typeof c !== 'undefined'){
        return a+b+c
    }

    return a + b
}

const sumAll = (a: number = 10, b: number,c:number = 2):number =>{
    return a+b+c
}

logMsg(addAll(2,3,2))
logMsg(addAll(2,3))
logMsg(sumAll(2,3))
logMsg(sumAll(undefined,3))

//Rest parameters

const total = (a:number,...nums: number[]):number => {
    return a+ nums.reduce((prev,curr)=> prev + curr)
}

logMsg(total(1,2,3,4))
//nigdy nie zwracający 
const createError = (erorMs: string):never =>{
    throw new Error(erorMs )
}

const infinite = () => {
    let i:number = 1
    while(true){
        i++
        if(i>100)break
    }
}
//custom type guard
const isNumber = (value: any):boolean => {
    return typeof value === 'number' ? true : false
}
//use of the never type
const mumberOrString = (value: number | string):string => {
    if(typeof value === 'string') return 'string'
    if(isNumber(value)) return 'number'

    return createError('to powinno sie nie wydarzyc')

}