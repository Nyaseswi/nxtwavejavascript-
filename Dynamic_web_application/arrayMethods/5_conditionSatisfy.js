let myArray = ['one','two','three','four','five'];
let itemIndex = myArray.findIndex(function(eachItem){
    if (eachItem==='one'){
        return true;
    }
    else{
        return false;
    }
});
console.log(itemIndex);