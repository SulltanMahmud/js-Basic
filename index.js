 
//  let person ={
//     name:'Mosh',
//     age : 30
//  };

// //  dot notation
// person.name ='john';

// // Bracket Notation
// person['name'] ='mary';
//  console.log(person.age);
 
// let selectedColors =['red','green','blue'];
// selectedColors[2] = 1;
// console.log(selectedColors.length);


//Function

// function greet(name, lastname){
//     console.log('Hellow' + name +' ' + lastname)
// }

// greet('Sultan mahmud','Alif' );//argument supply on the peramiter
// greet('Nothing');//argument supply on the peramiter

// // calculating a value
// function square(number) {
//    return number*number;
// }

// console.log(square(2))

// For loop

// for(i=1; i <= 4; i++){
//     console.log('Alif',i);
// }

// for (i = 1; i <= 4; i++) {
//   if(i % 2 != 0)
//   console.log(i)
// }


// while loop

// let i = 0;
// while(i<=5){
//   if(i % 2 != 0);
//     console.log(i);
//     i++;
// }


// Do while-loop

// let i = 0;

// do{
//     if(i % 2 != 0);
//      console.log(i);
//      i++;
// } while(i<=5);



//  for in-loop 
// its used for array object

// const person ={
//     name:'Sultan Mahmud',
//     age: 25

// };


// for(let key in person)
// console.log(key,person[key])

//  const colors = ["red", "green", "blue"];

//  for (let index in colors) {
//    console.log(index, colors[index]);
//  }


// For of loop

// const colors =['red','green' ,'blue']

// for(let color of colors)
// console.log(color)


// practice

// let number = max(4,3);
// console.log(number)


// function max(a,b){

//     // if(a > b) return a;
//     // else return b;
//     return(a>b) ? a: b;
// }


// 

// console.log(isLandscape(200,300))

// function isLandscape(width, height)
// {
//     return (width> height);
// }


// Task

//   divisible by 3 => Fizz
// Divisible by of 5 => BUzz
// Divisible by both 3  and  5 => FizzBuzz
// Not divisible by 3 or 5 => input
// Not a number =>'Not a number' 

//  Solution

// let output =fizBuzz(15) 
// console.log(output)

// function fizBuzz(input){
//     if(typeof input !== 'number')
//     return 'Not a Number';


//     if ( input % 5 === 0) 
//     return "Buzz";

//         if ( input % 3 === 0  ) 
//         return "Fizz";

        
//         if (input % 3 === 0 && input % 5 === 0) 
//         return "FizzBuzz";
// }


// Task speed limit
// speed Limit =70;
// 5 -> 1 point get
//Math.floor(1.3)
// 12 points -> suspended


// checkSpeed(80)

// function checkSpeed(speed){

//     const speedLimit = 70;
//     const kmperpoint = 5;

//     if(speed <= speedLimit)
//     console.log('ok');

//     else {
//         let points = math.floor( (speed - speedLimit) / kmperpoint );
//         if(points >=12)
//         console.log('license suspenet');
//         else
//         console.log('Points is', points)
//     }
// }
 