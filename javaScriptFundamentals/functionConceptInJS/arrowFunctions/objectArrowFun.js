
'use strict';

const rectangle = {
  width: 20,
  area() {
    return (length) => this.width * length;
  },
};

  const areaOfRectangle = rectangle.area();
  console.log(`Area: ${areaOfRectangle(50)}`);
//The value 50 is passed as the length argument

