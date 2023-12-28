const obj1 = {
    x:10,
    y:20,
    addz(z){
        return this.x + this.y +z
    }
}
console.log(obj1.addz(35));