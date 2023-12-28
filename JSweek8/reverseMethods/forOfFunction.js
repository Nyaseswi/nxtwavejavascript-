const userdata = [
    {
        name:'ssv',
        id:1,
        age:23,
    },
    {
        name:'sss',
        id:2,
        age:23,
    },
    {
        name:'ss',
        id:3,
        age:23,
    },
]
const displayUserdata = (data)=>{
 for (const items of data) {
    console.log(`${items.name} ${items.id}`);  
 }
}
displayUserdata(userdata.reverse());