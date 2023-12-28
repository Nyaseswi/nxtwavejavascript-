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
]
const index=  Doctors.findIndex((Element => Element.age===40));
console.log(index);
// If you want to check if a doctor with age 40 exists:
if (index !== -1) {
    console.log("Doctor with age 40 exists.");
} else {
    console.log("Doctor with age 40 does not exist.");
}