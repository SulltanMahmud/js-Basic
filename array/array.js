// const cars  =["audi","BMW","Toyota"];
// document.getElementById("demo").innerHTML= cars;
// console.log(cars.length)

// console.log(cars[cars.length-1]);//last element access

// // for(i=0; i<cars.length; i++){
// //     console.log(cars[i]);
// // }

// For each loop for array

// function myfunction(value, index, array) {
//   console.log(value, index, array);
// }

// cars.forEach(myfunction);
// console.log("finish")

// const number =[45,46,47,49,60];

// function myfunction(value,index,array){
// console.log(value)
// console.log(index)
// console.log(array)
// console.log('--------')
// }

// number.forEach(myfunction)

// Map array

// const number = [45, 46, 47, 49, 60];

// function myfunction(value){
// // return value* 2;
// if(value % 2 == 0)
// return value;
// }

// const newarray = number.map(myfunction);
// console.log(newarray)

// Filter
// const number =[45,6,8,9,50]

// function myfunction(value){
// return value>10 //return true
// }
// number.filter(myfunction)

//  let students =[
//     {id:"001", name:"Alif", sports:"cricket"},
//     {id:"002", name:"Sultan", sports:"basketball"},
//     {id:"003", name:"Rahim", sports:"ludo"},
//     {id:"004", name:"Karim", sports:"busket"},
//     {id:"005", name:"Rahman", sports:"haddudu"},
//  ];

//  function myfunction(value){
//     if(value.id % 2 == 0){
//         return true;
//     }
//     else{
//         return false;
//     }
//  }

// let evenRoll =students.filter(myfunction);
// console.log(evenRoll.id);

// const newarray = students.fillter((value)=>{
//     if(value.id % 2==0)return true;
//     else return false;
// })

// let names = students.map((curvalue)=>{
//     return `<li>${curvalue.name}</li>`;

// });
// console.log(names);

//  const div =document.getElementByclass('container');
//  div.innerHTML = `<ul>${names.join('')}</ul>`;

// map and fillter use same time

// const name = students.filter((curvalue)=>curvalue.sports == 'cricket')
//         .map((curvalue)=>{
//             return `<li>${curvalue.name}</li>`
//         })
//         const div =document.getElementsByClass('container');
//          div.innerHTML = `<ul>${name.join("")}</ul>`;

// Array Find

// var number=[1,2,3,4,5,6,7]
// var another = number.find((even)=>even % 2 ==0);
// console.log(another)

//  var matrixsha = [
//    { name: "Angelina Jolie", age: 80 },
//    { name: "Eric Jones", age: 2 },
//    { name: "Paris Hilton", age: 5 },
//    { name: "Kayne West", age: 16 },
//    { name: "Bob Ziroll", age: 100 },
//  ];

//  // make an array of names where age > 18
//  let myarray = matrixsha
//    .filter((curvalue) => curvalue.age > 18)
//    .map((curvalue) => {
//      return curvalue.name;
//    });

//  console.log(myarray);

// const count=getdata(10)

// count()//10

 function getdata(n) {
  let c = n;
  c++;
  return c; // Return the updated value
}

let data = getdata(10);
console.log(data);  

data = getdata(data);  
console.log(data);  

data = getdata(data);  
console.log(data);  
