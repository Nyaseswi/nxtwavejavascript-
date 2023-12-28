function sayHi(wish){
    console.log("Hi");
    wish();
    console.log("How are you?")
}

sayHi(function(){
    console.log("Good Morning")
});