function sayHi(wish){
    console.log("Hi");
    wish();
    console.log("Good morning")
}

let sayHello=function (){ // fun exp syntax is diff 
    console.log("Hello");
}
sayHi(sayHello);  