let person = {
    name:'yaseswi',
    age:25
};
let address = {
    city:'Vizag',
    pincode:25001,
};

let habits = {
    habit1:'singing',
    habit2:'dancing',
}
result = {...person,...address,...habits};
console.log(result);