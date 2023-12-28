function area(length,width){
    let result = length*width;
    let discount = result<10?'true':'false'
    console.log(`Discount: ${discount}`);
    return result    

}
console.log(area(10,10));


