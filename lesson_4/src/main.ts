//type casting / type assertions

type One = string
type Two = string | number
type Three = 'hello'

//convert to more or less specific 
let a: One = 'hello'
let b = a as Two //less specific
let c = a as Three//more specific

let d = <One>'world'
let e = <string | number>'world'
const addOrConcat = (a:number,b:number,c:'add' | 'concat'):number | string => {
    if(c==='add') return a + b
    return '' + a + b

}

let myVal: string = addOrConcat(2,2,'concat') as string

//ts nie widzi problemu ale string jest zwracany
let nextVal: number = addOrConcat(2,2,'concat') as number

(10 as unknown) as string

//DOM

const img = document.querySelector('img') as HTMLImageElement
//const myimg = document.getElementById('#img')!
//wykorzystanie ! mówi ts ze wiemy ze to istnieje i nie będzie to pusta wartość 
const myimg = document.getElementById('#img') as HTMLImageElement
const nextImge =<HTMLImageElement>document.getElementById('#img')
img.src

myimg.src