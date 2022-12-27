//Playground
//#region sumAll notes
// const sumAll = function(...numArray) {
//     // let numArray = [1,2,3,4];
//     console.log(numArray)

// let sum = 0;
// for(let i = 0; i < numArray.length; i++){
    
//     let num1= numArray[i];
//     console.log (sum += num1)

//     //console.log(sum = sum + num1);
    
//     console.log (num1)
//     console.log (numArray)
// }
// return sum

// };

// console.log (sumAll([1,4]))

// function myFunction(x, y, z) {}
// const args = [0, 1, 2];
// console.log (myFunction.apply(null, args));

// //use the numbers to in a for loop. the first number is the start second number end conditional

// function sum(number1, number2){
//     let sum = 0;
//     for(number1; number1<=number2; number1++){
//       sum += number1;
// }
// return sum
// }

// console.log (sum(1,4))

// const sumAll = function(num1, num2) {
// let sum = 0;
//     for(num1; num1 <= num2; num1++){
//         sum = sum + num1;  
//         num1
//         sum
// }
//     return sum
// };
// console.log (sumAll(1,4))

const sumAll = function(num1, num2) {
    let sum = 0;
    if (num1 < 0 || typeof(num1) != "number" || typeof(num2) != "number"){
        return "ERROR"
    }   
    else if (num1 < num2){
        for(num1; num1 <= num2; num1++){
            sum = sum + num1;  
        }
    }
    else if (num1 > num2){
        for(num2; num2 <= num1; num2++){
            sum = sum + num2;  
        }
    }
        return sum
    };
    console.log (sumAll(4,1))


    console.log (sumAll(1,4))

    console.log (sumAll(1, 20))

    console.log (sumAll (-17, 10))

    let number = -1;

 console.log(number < 0);
    
 console.log (sumAll (-17, 10))

 console.log (sumAll("10", 50))

//#endregion sumAll notes

//#region leapYears

/*

declare a function that takes one element and return true or false
the element receives a number
the number should be divisble by 4
not divisible by 100
and divisble by 400

*/

// const leapYears = function(year) {
//     if (year %4 === 0 || year %100 === 0){
//         if (year %400 === 0){
//             return true
//         }
//     }
//     else if (year %400 === 0){
//         return true
//     }
//    else{
//     return false
//    }
// };
const leapYears = function(year) {
    if (year %100 === 0){
        if (year %400 === 0){
            return true
        }
        return false
    }
    else if (year%4 === 0 || year %400 === 0) {
        return true
   }
   else 
   return false
};


console.log (1900%4)
console.log (leapYears(1996)) //true
console.log (leapYears(1997))//false
console.log (leapYears(34992))//true
console.log (leapYears(1900))//false
console.log (leapYears(100)) //false
console.log(leapYears(1600))//true
console.log(leapYears(700))//false
//#endregion leapYears

//#region tempConversion

/* 

f2 unctions that takes one argument a number and return a number

the argument should be go through a formula then come out rounded to the first decimal up or down who knows

*/

const convertToCelsius = function(farenheit) {
    let celcius = (farenheit-32)*(5/9);
    return Math.round(celcius*10)/10;
};
let f= 50;
console.log ((f-32)*(5/9))
32
100
-100
console.log (convertToCelsius(32))//0
console.log (convertToCelsius(100))//37.8
console.log (convertToCelsius(-100))//-73.3

const convertToFahrenheit = function(celcius) {
    let farenheit = (celcius * (9/5) +32);
    return Math.round (farenheit*10)/10;
};

let c = 73.2

console.log ((c* (9/5)+32));
console.log (convertToFahrenheit(0))//32
console.log (convertToFahrenheit(73.2))//163.8
console.log (convertToFahrenheit(-10))//10

//#endregion tempConversion

