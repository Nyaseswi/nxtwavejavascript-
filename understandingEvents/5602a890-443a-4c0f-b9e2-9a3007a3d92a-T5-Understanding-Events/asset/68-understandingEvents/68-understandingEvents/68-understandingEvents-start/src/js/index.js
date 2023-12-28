const morningBtn = document.querySelector('#morning');
const dayBtn = document.querySelector('#day');
const afternoonBtn = document.querySelector('#afternoon');
const eveningBtn = document.querySelector('#evening');
const nightBtn = document.querySelector('#night');
const greeting = document.querySelector('#greeting');

//manipulations 
morningBtn.addEventListener('click',() => (greeting.innerText='Good morning'));
dayBtn.addEventListener('click',() => (greeting.innerText='Good day'));
afternoonBtn.addEventListener('click',() => (greeting.innerText='Good afternoon'));
eveningBtn.addEventListener('click',() => (greeting.innerText='Good evening'));
nightBtn.addEventListener('click',() => (greeting.innerText='Good night'));
greeting.addEventListener('click',() => (greeting.innerText='Have a great day'));