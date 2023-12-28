'use strict';
const sensorData = [ 
{
id: 1, 
date: '20-DEC-2021',
maxTemp: 34, 
minTemp: 25, 
},
{
  id: 2, 
  date: '22-DEC-2021',
  maxTemp: 31, 
  minTemp: 19, 
}, 
{
  id: 3,
  date: '24-DEC-2021', 
  maxTemp: 32, 
  minTemp: 19.5, 
}, 
{
  id: 4,
  date: '26-DEC-2021', 
  maxTemp: 32, 
  minTemp: 19.5, 

}, 

];

for (const data of sensorData.reverse()) { 

  console.log(`${data.date} 1 MAX: ${data.maxTemp}, MIN: ${data.minTemp}`); 

}