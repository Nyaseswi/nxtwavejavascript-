function computeRectStats(length,width){
    let areaRect = Number(length) * Number(width);
    let perimeterRect = 2 * (Number(length) * Number(width));
    console.log(`Area:${areaRect}`)
    console.log(`Perimeter:${perimeterRect}`)
}
// we can declare this way 
computeRectStats(10,10);
console.log('-------------------------');
// we can declare in this way also 
let rectAlength = 25;
let rectAwidth = 25;
computeRectStats(rectAlength,rectAwidth);

let rectBlength = 50;
let rectBwidth = 250;
computeRectStats(rectBlength,rectBwidth);
console.log('-------------------------');

let rectClength = 1235;
let rectCwidth = 285;
computeRectStats(rectClength,rectCwidth);
console.log('-------------------------');