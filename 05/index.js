/*Create a function that will be able to convert figures from Fahrenheit to Celsius. */


function fahrenheitToCelcius (val){
    const ans = (val - 32) * 5 / 9;
    console.log(ans);
}


// Create a function that will calculate the average of numbers in an array

function average (arr){
    let sum = 0;
    for(let i = 0; i < arr.length; i++){
        sum += arr[i];
    }

    const avg = sum / arr.length;
    console.log(avg)
}

// Create a function that checks if a number, n is divisible by two numbers x and y. All inputs are positive, non-zero digits.

function isDivisible (n, x, y){
    if(n > 0 && x > 0 && y > 0){
        if((n % x)== 0 && (n % y) == 0){
            return true;
        }
    }
   return false;
}

// Create a function that will output the first 100 prime numbers.

function isPrime (x) {
    if(x == 2){
        return true;
    }
    if(x % 2 == 0){
        return false;
    }
    for(let i = 3; i <= Math.sqrt(x); i+=2){
        if((x % i == 0) && (x!=i)){
            return false;
        }
    }

    return true;
}

for(let a =2; a <= 100; a++){
    if(isPrime(a)){
        console.log(a);
    }
}

// Create a function that will return a boolean specifying if a number is a prime number.

function isPrime (x) {
    if(x == 2){
        return true;
    }
    if(x % 2 == 0){
        return false;
    }
    for(let i = 3; i <= Math.sqrt(x); i+=2){
        if((x % i == 0) && (x!=i)){
            return false;
        }
    }

    return true;
}


// Create a function that receives an array of numbers of diverse numbers and returns an array containing only positive numbers.

function positiveNum (arr) {
    const arrOfPositive = [];
    for(let i = 0; i < arr.length; i++){
        if(arr[i] > 0){
            arrOfPositive.push(arr[i]);
        }
    }

    return arrOfPositive;
}


/*Write a program that prints the numbers from 1 to 100. 
But for multiples of 3 prints "Fizz" instead of the number and for the multiples of 5 prints "Buzz". 
For numbers which are multiples of both 3 and 5 prints "FizzBuzz".*/

for(let i = 0; i <= 100; i++){
    if((i % 3 == 0) && (i % 5 == 0)){
        console.log("FizzBuzz")
    }else if(i % 3 == 0){
        console.log("Fizz");
    }else if(i % 5 == 0){
        console.log("Buzz");
    }else{
        console.log(i);
    }
}


/*
The marketing team is spending way too much time typing in hashtags. 
Let’s create a hashtag generator for them, our hashtag generator will meet the following criteria; 
It must start with a hash symbol, #.
Ignore all spaces in the input.
All words must have their first letter capitalized.
If the final result is going to be longer than 140 characters, it should return false.
If the input or result is an empty string, it should return false.

*/

function hashTagGenerator (text) {
    if(text.length == 0){
        return false;
    }

    const str = text.split(" ");
    
    const hash = [];
    for(let i = 0; i < str.length; i++){
        hash[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
    }

    const str2 = hash.join("");
    if(str2.length >= 140){
        return false;
    }else{
        return "#" + str2;
    }
    
}

// Test case 1
fahrenheitToCelcius(100);

// Test Case 2
average([3, 4, 5, 6, 7]);

// Test Case 3
const val1 = isDivisible(15, 3, 5);
console.log(val1);

//Test Case 5
const num = isPrime(13);
console.log(num)

//Test Case 6
const val2 = positiveNum([-8, 10, 6, 63, -14, 50, -67, 4, -7]);
console.log(val2);

//Test Case 8
hashTagGenerator("Welcome home my friend")

