let a = 1 
let b = 5
let operation = 'add';
switch (operation){
    case 'add':
        console.log(`a+b = ${a+b}`);
        // break;
    case 'sub':
        console.log(`a-b = ${a-b}`);
        break;
    default:
        console.log('Invalid');
}