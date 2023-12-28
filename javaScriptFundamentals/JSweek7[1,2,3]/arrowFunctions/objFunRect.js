'use strict';
const rectangle ={
    width:20,
    area(){
        return(length) =>  this.width * length 
    }
}
let areaOfLength = rectangle.area();
console.log(areaOfLength(20));