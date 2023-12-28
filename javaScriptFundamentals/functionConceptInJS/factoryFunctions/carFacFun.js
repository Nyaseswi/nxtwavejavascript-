function createCar(color, brand,company) { 
    //createCar = functionName,CamelCase arguments passed properties 
    return {
      color: color, //value for key passed down 
      brand: brand,
      company, // short hand notation 
      start: function() {
        console.log("started");
      },
      //function short hand notation
      end(){
        console.log("ended")
      }
    };
  }
  
  let car1 = createCar("blue", "Audi","volvo"); // passed values for above properties values 
  let car2 = createCar("red", "Tata","Mg");
  let car3 = createCar("green", "BMW","rangeRover"); // if values is not passed for property output is undefined 
  
  console.log(car1);  //accessing values 
  console.log(car2);  
  console.log(car3);  

  //return p:p values:below