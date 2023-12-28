function computePayable(cost){
    let discount = cost < 1000 ? 0: 10 ;
    let totalCost = cost - cost *(discount/100);
    return totalCost;

}
console.log(computePayable(2500));
console.log(computePayable(250));