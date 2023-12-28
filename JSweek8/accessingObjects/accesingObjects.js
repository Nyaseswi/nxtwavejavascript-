const user = {
    name:'ssv',
    age:23,
    sex:'male'
}
for (let[key,val] of Object.entries(user)) {
    console.log(key,val);   
}
console.log(Object.keys(user));
console.log(Object.values(user));
console.log(Object.entries(user));

const findVal = (val,obj)=>Object.values(obj).includes(val);
console.log(findVal('ssv',user)); //true
console.log(findVal('sss',user)); //false

if (Object.keys(user).includes('age')){
    console.log(user.age);
}