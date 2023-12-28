const user = (user,age,job) => ({
    user,
    age,
    job
});
const john = user('John',23,'eng');
const jan = user('jan',24,'soft');
console.log(john);
console.log(jan);