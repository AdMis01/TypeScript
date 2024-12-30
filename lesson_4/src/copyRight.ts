// let year:HTMLElement | null
// year = document.getElementById("year")
// let thisYear: string 
// thisYear = new Date().getFullYear().toString()
// if(year){
//     year.setAttribute("datatime",thisYear)
//     year.textContent = thisYear
// }
const year:HTMLElement | null = document.getElementById("year") as HTMLSpanElement

const thisYear: string = new Date().getFullYear().toString()
year.setAttribute("datatime",thisYear)
year.textContent = thisYear