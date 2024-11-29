// question number 1
let givenyear=prompt('enter the year');
givenyear === 364 ? console.log('Is a leap year'):console.log('is notb a leapyear')
// Question number 2
let randomNumber= Math.floor(Math.random()*10);
let a = prompt('enter the integer from 1 to 10');
a === randomNumber ? console.log ('Good work '): console.log('Not matched');
//question number 3
//question number 4
for (let i=1; i<=100; i++){
    i%3 === 0 && i%5 === 0 ? console.log('fizzbuzz'): i%3 === 0 ? console.log ('Fizz'): i % 5 === 0 ? console.log ('Buzz'):console.log(i)
}
//question number 5
let totalmark = null ;
let examination = null;
totalmark >= 89 & totalmark <= 100?console.log('A+ grade'): 


//question number 6
const primeN = (a) => {
    if (a <= 1){
        console.log("not a prime ") 
    }
    for (let i = 2; i<= Math.sqrt(a);i++ ){
        if(a%i === 0){
            console.log('is not a prime ')
        }
        else{
            console.log('is a prime number')
        }
    }
}
