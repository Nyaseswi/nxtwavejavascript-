const user = {
    a:10,
    b:20,
    addc(){
        return(c)=> this.a + this.b + c
    }
}
const addition = user.addc();
console.log(addition(10));

// regular function 

const name = {
    name:'ssv',
    age:23,
    add(){
        return this.name 
    }
}
console.log(name.add());