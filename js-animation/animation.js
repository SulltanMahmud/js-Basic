Time interval

let a =10

let id =setInterval(anim,500)

function anim(){
    a =a + 10;
// console.log(a);
    if(a == 200){
        clearInterval(id);
        let initialState = document.getElementById('test');
        initialState.style.margin = 0 + "px"

    }else{
        let target = document.getElementById("test");
        target.style.marginLeft = a + "px";
    }

 
}


// Timeout 
let id = setTimeout(anim,3000);

function anim(){
     let target =document.getElementById('test');
     target.style.width ="500px";
}