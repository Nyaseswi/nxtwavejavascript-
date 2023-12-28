function sayHi(wish){
    console.log("Hi");
    wish();
    console.log("Good morning")
}

function sayHello(){
    console.log("Hello");
}
// sayHi(sayHello()); // braces close chesthe wish function ante arg func call avadhu  one way
sayHi(sayHello); //2nd way 