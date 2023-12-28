const obj1 = {
    x: 10,
    y: 20,
    addz: (z) => this.x + this.y + z
};

console.log(obj1.addz(35));
 //  nan outcome 
 // to avoid nan outcome 

const obj2 = {
    x:20,
    y:10,
    addz(){
        return (z) => this.x + this.y +z; // arrow function 
    }
}
//create variable 
let additionZ = obj2.addz()
//printing 
console.log(additionZ(10));