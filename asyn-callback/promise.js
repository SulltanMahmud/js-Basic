
 const status = false;

 console.log('task 1')

// Promise defination

const promise = new Promise(function( resolve, reject){

 setTimeout(function () {
   if (status) {

    resolve('Task 2');
                                             // Promise define
   } else {
      reject('failed')
   }
 }, 2000);

})

 

//  Promise call   
                       
Promise

    .then(function(value){
        console.log(value);
    })
    .catch(function(err){
        console.log(err);
    })

    console.log('Task 3')
  