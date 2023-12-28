function User(age,name,job){ //upper case function name 
this.age = age;
this.name = name; //this keyword 
this.job = job;
this.canDrive=() => 
(this.age >=100 ?'Yes':'No')

}
let user0 = new User(23,'ssv','civic',20); //new keyword  for objects 
console.log(user0);
console.log(user0.canDrive());

