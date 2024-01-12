



const paymentSuccess = true;
const marks = 90;

// Promise define
function enroll() {
  console.log("Course enrollment is in progress");

  const promise = new Promise(function (resolve, reject) {
    setTimeout(function () {
      if (paymentSuccess) {
        resolve();
      } else {
        reject("paymentn failed");
      }
    }, 2000);
  });

  return promise;
}

function progress() {
  console.log("Course On progress");

  const promise = new Promise(function (resolve, reject) {
    setTimeout(function () {
      if (marks >= 80) {
        resolve();
      } else {
        reject("You Could not get enough marks to get the certificate");
      }
    }, 3000);
  });

  return promise;
}

function getCertificate() {
  console.log("Preparing your ccertificate");

  const promise = new Promise(function (resolve) {
    setTimeout(function () {
      resolve("Congrats you got the certificate");
    }, 1000);
  });

  return promise;
}


// enroll()
//   .then(progress)
//   .then(getCertificate)
//   .then(function (value) {
//     console.log(value);
//   })
//   .catch(function (err) {
//     console.log(err);
//   });

async function course(){

    try {
    await enroll();
    await progress(); 
    const msg =  await getCertificate();

   
console.log(msg)
    }
    catch(err){
        console.log(err)
    }
}

 