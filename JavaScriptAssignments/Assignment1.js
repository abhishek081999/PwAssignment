/*
// -------Q1 Create a JavaScript File, using js comments, List all the datatypes of js,and specify anexample for each of them-------------------

// Ans:
// the Following are the dataTypes of js:
// 1. String 
// 2. Number
// 3. Bigint
// 4. Boolean
// 5. Undefined
// 6. Null
// 7. Symbol
// 8. Object

// 1. String :"I am happy to join PW Skills FSWD Course"-------------------

let a = "I am happy to join PW Skills FSWD Course";
console.log(a);



// 2. Number:- Number("123");  returns the number 123 Number("123") === 123; // true ,
//Number("unicorn"); // NaN ,Number(undefined); // NaN  -------------------------------------------

// i) Integer:9
let b = 10;
console.log(b);

// ii) Floating value:10.2
let c = 10.2;
console.log(c, typeof c);

// iii) Infinity: Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY
let d = Number.POSITIVE_INFINITY; //POSITIVE_INFINITY is returned on overflow:
let e =Number.NEGATIVE_INFINITY //NEGATIVE_INFINITY is returned on overflow:
console.log(d,e,typeof d, typeof e);
// iv) NaN
let f = Number.NaN;
let g = 100/"Apple";
console.log(f,g,typeof f , typeof g); //Trying to do arithmetic with a non-numeric string will result in NaN (Not a Number):




//3. BigInt:1024n------------------------------------------------------------------------------------
let h = 1313254356435646757657647575456n;
let i =BigInt("4533563654354563635436465574546536");
console.log(h,i, typeof h,typeof i);




//4. Boolean: true , false;--------------------------------------------------------------------------
console.log(10>5);//Everything With a "Value" is True

let j =0; //Everything Without a "Value" is False
console.log(Boolean(j)); //false The Boolean value of 0 (zero) is false:
let j2 = -0;
console.log(Boolean(j2)); //false The Boolean value of -0 (minus zero) is false:
let j3 = "";
console.log(Boolean(j3)); //false The Boolean value of "" (empty string) is false:
let j4;
console.log(Boolean(j4)); //false The Boolean value of undefined is false:
let j5=null;
console.log(Boolean(j5));  // false The Boolean value of null is false:
let j6 = 10 / "Hallo";
console.log(Boolean(j6));  // false The Boolean value of NaN is false:



//5.Undefined:undefined; The primitive value undefined.------------------------------------------------------

let k;
if (k === undefined) {
  // these statements execute
} else {
  // these statements do not execute
}

function test(k1) {
    if (k1 === undefined) {
      return 'Undefined value!';
    }
    return k1;
  }
  
  let k1;
  
  console.log(test(k1)); //Undefined value!



// 6. Null  : null  null is a special value that represents an empty or unknown value. For example,--------------------------------------
let m1  = null;
console.log(m1);//null

const m2 = null;
console.log(typeof m2); // object

function getVowels(str) {
    const m = str.match(/[aeiou]/gi);
    if (m === null) {
      return 0;
    }
    return m.length;
  }
  
  console.log(getVowels('sky'));
  // Expected output: 0
  


  //7. Symbol :Symbol("PWSkills")   Symbols are immutable (cannot be changed) and are unique. For example,--------------------------------

  const value1 = Symbol('PW');
  const value2 = Symbol('PW');
  console.log(value1 === value2); // false

  const x = Symbol('hey');
console.log(x.description); // hey

//we can add symbols as a key in an object using square brackets []. For example,
let id = Symbol("id");

let person = {
    name: "Jack",

    // adding symbol as a key
    [id]: 123 // not "id": 123
};

console.log(person); // {name: "Jack", Symbol(id): 123}



// 8. Objects:---------------------------------------------------------------------------------------------

// i)Array:[1,2,"Pw"]
const cars = ["Saab", "Volvo", "BMW"];
let cardo = car[0];
console.log(cars,cardo);
const carss = [];
carss[0]= "Saab";
carss[1]= "Volvo";
carss[2]= "BMW";

const carsss = new Array("Saab", "Volvo", "BMW");

console.log(carsss);

// ii)Object:{name:"PW skills", course:" FSWD"}
const n = {firstName:"John", lastName:"Doe", age:46};

const persons = {
    firstName:"John",
    lastName:"Doe",
    age:50, eyeColor:"blue"
  }
  
  const n1 = persons;
  n1.age = 10;      // Will change both x.age and person.age
  console.log(n1);  
  

// Q2 Create an array of 10 products that you have recently purchased or viewed on an e-commerce site.
const eCommerce = [
  "iPhone",
  "Display",
  "Canon Camera",
  "Figma",
  "Card Games",
  "Nikon",
  "Vivo",
  "GTA VC",
  "Painting",
  "basket",
];


// Q3. Create an object of a student registry of 5 students whose key is the registration number and the value is the student name. Registration number starts from 1 and continues.
// Ans
let students ={
  1:"Abhishek",
  2:"Rohit",
  3:"Shobit",
  4:"Ashish",
  5:"Akash"
} ;


//---------Variables and typeof...................................................................................................
//1. Specify an example for all the datatypes in Javascript, store the values in a variable, and verify the type of value stored.
// 1. String :"I am happy to join PW Skills FSWD Course"-------------------

let a = "I am happy to join PW Skills FSWD Course";
console.log(a);



// 2. Number:- Number("123");  returns the number 123 Number("123") === 123; // true ,
//Number("unicorn"); // NaN ,Number(undefined); // NaN  -------------------------------------------

// i) Integer:9
let b = 10;
console.log(typeof b);

// ii) Floating value:10.2
let c = 10.2;
console.log( typeof c) ;

// iii) Infinity: Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY
let d = Number.POSITIVE_INFINITY; //POSITIVE_INFINITY is returned on overflow:
let e =Number.NEGATIVE_INFINITY //NEGATIVE_INFINITY is returned on overflow:
console.log(typeof d, typeof e);
// iv) NaN
let f = Number.NaN;
let g = 100/"Apple";
console.log(typeof f , typeof g); //Trying to do arithmetic with a non-numeric string will result in NaN (Not a Number):




//3. BigInt:1024n-----------------------
let h = 1313254356435646757657647575456n;
let i =BigInt("4533563654354563635436465574546536");
console.log( typeof h,typeof i);




//4. Boolean: true , false;---------------
console.log(10>5);//Everything With a "Value" is True

let j =0; //Everything Without a "Value" is False
console.log(typeof Boolean(j)); //false The Boolean value of 0 (zero) is false:

//5.Undefined:undefined; The primitive value undefined.---------------

let k;
if (k === undefined) {
  // these statements execute
} else {
  // these statements do not execute
}

function test(k1) {
    if (k1 === undefined) {
      return 'Undefined value!';
    }
    return k1;
  }
  
  let k1;
  
  console.log(typeof test(k1)); //Undefined value!



// 6. Null  : null  null is a special value that represents an empty or unknown value. For example,-------------------
let m1  = null;
console.log(typeof m1);//null

const m2 = null;
console.log(typeof m2); // object

function getVowels(str) {
    const m = str.match(/[aeiou]/gi);
    if (m === null) {
      return 0;
    }
    return m.length;
  }
  
  console.log(typeof getVowels('sky'));
  // Expected output: 0
  


  //7. Symbol :Symbol("PWSkills")   Symbols are immutable (cannot be changed) and are unique. For example,---------------

  const value1 = Symbol('PW');
  const value2 = Symbol('PW');
  console.log( typeof value1 === value2); // false




// 8. Objects:-

// i)Array:[1,2,"Pw"]
const cars = ["Saab", "Volvo", "BMW"];

console.log(typeof cars);


const carsss = new Array("Saab", "Volvo", "BMW");

console.log( typeof carsss);

// ii)Object:{name:"PW skills", course:" FSWD"}
const n = {firstName:"John", lastName:"Doe", age:46};

console.log(typeof n);
  
 
// Q2. Create 2 valid variables and 2 invalid variables and print them onto the console. Comment the results and error messages.
//Valid Variables
let  name = "PW Skills";
console.log(name);//OUTPUT: PW Skills
let iAmHappy = true;
console.log(iAmHappy);

//Invalid Variables
//let 1name ="PWSkills"
//console.log(1name);//OUTPUT: SyntaxError:Invalid or unexpected token
//let var =13
//console.log(var);//Output: SyntaxError unexpected token




// ----------------------------------------
// ----------OPERATOR------------------------------------
//Q1 Write a Programthat prints the multiplication table in the textbook format of any number specified.

let number = 6;

console.log(`${number} * 1 = ${number *1}`);
console.log(`${number} * 2 = ${number *2}`);
console.log(`${number} * 3 = ${number *3}`);
console.log(`${number} * 4 = ${number *4}`);
console.log(`${number} * 5 = ${number *5}`);
console.log(`${number} * 6 = ${number *6}`);
console.log(`${number} * 7 = ${number *7}`);
console.log(`${number} * 8 = ${number *8}`);
console.log(`${number} * 9 = ${number *9}`);
console.log(`${number} * 10 = ${number *10}`);



// ---------------------------------------
//Q2 Write a program to perform all the arithmetic operations[except increment and decrement operators]of 
//js of any two numbers stored in the variables num2. also,print the results to the console.

let num1 = 10;
let num2 =8;

//Addition (+): Adds two values together.
console.log(`The addition of num1 and num2 is ${num1 + num2}`);

//substraction (-): Substracts one value from another.
console.log(`The Substraction one num1 and num2 is ${num1 - num2}`);

//Multiplication (*): Multiplies two values together.
console.log(`The multiplication of num1 and num2 is ${num1 * num2}`);

//Devision(/): Divides one value by another
console.log(`The Devision of num1 and num2 is ${num1 / num2}`);

//Modulus(%): Returns the remainder of division operation.
console.log(`The result of modulo operation of num1 and num2 is ${num1 % num2}`);

//Exponentiation(**): raises to the power of .
console.log(`The exponential  of num1 and num2 is ${num1 ** num2}`);




// Q3 Write a program to find out the perimeter of a rectangle. print the result to the console
let length =10;
let width =20;

let perimeterOfRectangle = 2 * (length + width);

console.log(`The perimeter of the rectangle with length: ${length} and width: ${width}
is ${perimeterOfRectangle}`);





//Q4. Write a program to demonstrate the results of comparison operators. Note that both the truth and false condition for each operator must be specified.

// Equal
let numm1 = 12;
let numm2 = 12;
console.log(numm1 == numm2); //true

let numm3 = 12;
let numm4 = 10;
console.log(numm3 == numm4); //false

// Not Equal
let numm11 = 12;
let numm12 = 12;
console.log(numm11 != numm12); //false

let numm13 = 12;
let numm14 = 10;
console.log(numm13 != numm14);//true

// Strictly Equal
let numm21 = 12;
let numm22 = 12;
console.log(numm21 == numm22); //true

let numm23 = 12;
let numm24 = "12";
console.log(numm23 === numm24); //false

// Strictly Not Equal
let numm31 =12;
let numm32 =12;
console.log(numm31!==numm32);// false

let numm33 = 12;
let numm34 ="12";
console.log(numm33 !== numm34);//true

// Greater Than
let numm41 =13;
let numm42 =12;
console.log(numm41 > numm42);//true

let numm43 = 10;
let numm44 =12;
console.log(numm43 > numm44);//false

// Greater Than or Equal to
let numm51 = 13;
let numm52 = 12;
console.log(numm51>= numm52);//true

let numm53 = 10;
let numm54 = 12;
console.log(numm53 >= numm54);//false

// Lesser than
let numm61 = 12;
let numm62 = 13;
console.log(numm61 < numm62); //true

let numm63 = 12;
let numm64 = 10;
console.log(numm63< numm64);//false

// Lesser than or equal to 
let numm71 = 13;
let numm72 = 13;
console.log(numm71 <= numm72);//true

let numm73 = 12;
let numm74 = 10;
console.log(numm73 <= numm74);





// -------------------------------------------------------------------
// -----------------------------------------------------------------------------
// What are Conditions , if , if-else,if-else-if
// Q1 write a program of traffic control that accepts the traffic light displayed and prints the message. if the traffic light is red print the vehicles must stop.
let trafficLight ="orange";

if (trafficLight == "red") {
  console.log("Vehicles must Stop.");
}else if (trafficLight == "orange"){
  console.log("Vehicles must wait . The signal is changing to red or green. ");
}else if (trafficLight == "green"){
  console.log("Vehicles may proceed with caution.");
}else{
  console.log("Invalid traffic Light");
}


// Q2 Write a program to print the largest of 2 numbers.
let nums1 = 20;
let nums2 = 15;

if(nums1 > nums2){
  console.log("nums1 is greater than nums2");
}else {
  console.log("nums2 is grater than nums1");
}


// Q3 write a program that takes a number as input and output "Fizz" if it is divisible by 3,
// "Buzz" if it is divisible by 5 , and "FizzBuzz" if it is divisible by both 3 and 5.
// Note that any number can be passed and not restricted to the numbers divisible by 3 or 5.

let nuum = 5;
if (nuum % 5 ==0 && nuum % 3 == 0){
  console.log("FizzBuzz");
}else if (nuum % 3 == 0){
  console.log("Fizz");
}else if (nuum % 5 == 0){
  console.log("Buzz");
}else{
  console.log("Invalid input");
}


// --------------------------------------------------------
// ---------------------------------------------------------------------
// Switch Case
//Q1 Write a program thattakes in a day of week (e.g.,Monday, tuesday, etc) and output the number of days untill the weekend
const day ="Tuesday";
let daysUntilWeekend;

switch(day){
  case "Monday":
    console.log(`there are 6 day(s) until the weekend.`);
    break;
  case "Tuesday":
    console.log(`there are 5 day(s) until the weekend.`);
    break;
  case "Wednesday":
    console.log(`there are 4 day(s) until the weekend.`);
    break;
  case "Thursday":
    console.log(`there are 3 day(s) until the weekend.`);
    break;
  case "Friday":
    console.log(`there are 2 day(s) until the weekend.`);
    break;
  case "Saturday":
    console.log(`there are 1 day(s) until the weekend.`);
    break;
    case "Sunday":
    console.log(`there are 0 day(s) until the weekend.`);
    break;
    default:
      daysUntilWeekend = "Invalid day";
      break;
}



// Q2 Write a program that takesin a number between 1 and 12 and outbuts the corresponding month of the year.
const monthNumber = 1;
switch (monthNumber){
  case 1:
    console.log("January");
    break;
  case 2:
    console.log("Feb");
    break;
  case 3:
    console.log("Mar");
    break;
  case 4:
    console.log("April");
    break;
  case 5:
    console.log("May");
    break;
  case 6:
    console.log("June");
    break;
  case 7:
    console.log("July");
    break;
  case 8:
    console.log("Aug");
    break;
  case 9:
    console.log("Sep");
    break;
  case 10:
    console.log("Oct");
    break;
  case 11:
    console.log("Nov");
    break;
  case 12:
    console.log("Dec");
    break;
    default:
      console.log("Invalid month number");
}


// ------------------------------------------
// -------------------------------------------------------
// Ternary Conditions
// Q1 Write a program that takes in a number and outputs whether it is positive, negative, or zero
let numb = 0;
numb == 0 
? console.log("The number is zero")
:numb > 0
?console.log("The number is greater than zero")
:console.log("The number is lesser than zero");



// ---------------------------------
// Q2 Create a program that takes in two numbers and prints the larger one.
let numb1 =10;
let numb2 =12;
numb1 == numb2
?console.log("Both the numbers are equal.")
:numb1 > numb2
?console.log(`The larger number among the two number is ${numb1}.`)
:console.log(`The larger number among the two numbers is ${numb2}.`);


// ...........................................................
// ------------------------------------------------------------------------
// Loops
// Q1 Write a program that generates the multiplication table in the textbox format for a given number.

let numn = 5;
for(let i = 1; i<=10; i++){
  console.log(`${numn} * ${i} = ${numn * i}`);
}


// Q2 Write a program that prints all the positive even numbers till the number specified
let numberss = 10
for (let i = 1; i <= numberss; i++){
  if(i%2 ==0){
    console.log(i);
  }
}
*/