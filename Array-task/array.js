let array = [23, 35, 56, 58, 68, 70];

// let newArray = array.filter((x) => {
//   if (x > 30) {
//     return true;
//   } else false;
// });
// console.log(newArray);
// let newArray = array.filter((x)=>{
//     if(x === 58){
//         console.log(x)
//     }
// })

// console.log(array);

// console.log(array.length);

// for(i=0;i<array.length;i++){

//     console.log(array.[i])
// }

const myarray = [
  {
    id: 11155,
    Name: "Sultan Mahmud",
    Salary: 2500,
  },

  {
    id: 11156,
    Name: "Mahmud",
    Salary: 3000,
  },

  {
    id: 11157,
    Name: "Raffik Khan",
    Salary: 5000,
  },

  {
    id: 11158,
    Name: "Arif Rahman",
    Salary: 2000,
  },
];

//   let name = myarray.map((x)=>{
//     console.log(x.Name)
//   })

let salary = myarray.filter((x)=>{
    if(x.Salary >= 3000)
    {

       return console.log(x.Name);

    }
})
// let s = myarray.filter((x) => x.Salary >= 3000);
// console.log(myarray.filter((x) => x.Salary >= 3000));
