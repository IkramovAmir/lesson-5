// let n = prompt("Enter number: ")
// console.log(n * 60)
// alert(n * 60)
// ------------------------------------------------------------------------------------------

// let fname = prompt("fname: ")
// let lname = prompt("lname: ")
// console.log(fname)
// alert(fname + " " + lname)
// ---------------------------------------------------------------------------------------------

// let fname = "Amir"
// let age = 19
// let student = Boolean() 
// console.log(typeof fname)
// console.log(typeof age)
// console.log(typeof student)
// --------------------------------------------------------------------------------------------------

// let n1 = Number(prompt("First number: "))
// let n2 = Number(prompt("Second number: "))
// alert(n1 + n2)
// -------------------------------------------------------------------------------------------------

// let n1 = Number(prompt("First number: "))
// let n2 = Number(prompt("Second number: "))
// let n3 = Number(prompt("Third number: "))
// console.log((n1 + n2 + n3)/3)
// ------------------------------------------------------------------------------------------------------


// let n1 = Number(prompt("First number: "))
// let n2 = Number(prompt("Second number: "))
// console.log(n1 * n2)
// -------------------------------------------------------------------------------------------------


// let n1 = Number(prompt("First number: "))
// let n2 = Number(prompt("Second number: "))
// console.log(n1 / n2)
// -------------------------------------------------------------------------------------------------


// let n1 = prompt("First number: ")
// let n2 = prompt("Second number: ")
// console.log(n1*n1 , n2*n2)
// -------------------------------------------------------------------------------------------------

// let n1 = prompt("First number: ")
// let n2 = prompt("Second number: ")
// console.log(n1*n1*n1 , n2*n2*n2)
// -------------------------------------------------------------------------------------------------

// let n1 = prompt("First number: ")
// let n2 = prompt("Second number: ")
// console.log(n1*n1*n1 * n2*n2*n2)
// -------------------------------------------------------------------------------------------------

// let fname = prompt("Enter your name: ")
// let lname = prompt("Enter last name: ")
// alert("Sizning ismingiz" + " " + fname + " "+ lname)
// -------------------------------------------------------------------------------------------------


// let fname = prompt("Enter your name: ")
// let lname = prompt("Enter last name: ")
// alert(lname + fname)

// --------------------------------------------------------------------------

let n = Number(prompt("Enter number: "))

if (n % 3 == 0 && n % 5 == 0) {
    console.log("FizzBuzz")
    alert("FizzBuzz")
}else if (n % 3 == 0){
    console.log("Fizz")
    alert("Fizz")
}else if (n % 5 == 0) {
    console.log("Buzz")
    alert("Buzz")
} 

let n3 = Number()
let n5 = Number()
let arr3 = []
let arr5 = []

for (let i = 0; i <= n; i++){
    if (i % 3 == 0 && i % 5 == 0) {
        n3 ++
        n5 ++
        arr3.push(i)
        arr5.push(i)
    }else if (i % 3 == 0){
        n3 ++
        arr3.push(i)
    }else if (i % 5 == 0) {
        n5 ++
        arr5.push(i)
    } 
}
console.log("3 soni "+ n + " gacha bo'lgan sonlardan " + n3 + " tasiga bo'linadi. " + "Ular: " + arr3)
console.log("5 soni "+ n + " gacha bo'lgan sonlardan " + n5 + " tasiga bo'linadi. " + "Ular: " +arr5) 






