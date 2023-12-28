'use strict';
const user={
    id:1,
    name:'ssv',
    age:20,
};
console.log(Object.getOwnPropertyDescriptors(user,'name'));
Object.defineProperty(user,'name',{
    enumerable:false,
    writable: false,
    configurable: false,
})
// Verify that the 'name' property is now non-enumerable as a result it wont be printed in the loop
for (const key in user) {
    console.log(key);
}

