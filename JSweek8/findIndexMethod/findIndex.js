const Doctors = [
    {
        id:1,
        name:'ssv',
        age:23,
    },
    {
        id:2,
        name:'ssv',
        age:40,
    },
    {
        id:2,
        name:'ssv',
        age:40,
    },
    {
        id:2,
        name:'ssv',
        age:50,
    },
]
const index = Doctors.findIndex((Element) => Element.age ===40);
console.log(index);
console.log("Index of doctor with age 40:", index);
//returns only 1st match 