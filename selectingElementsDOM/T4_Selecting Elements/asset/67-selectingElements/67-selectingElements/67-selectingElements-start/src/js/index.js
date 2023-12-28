// Selectors
const siteTitle = document.getElementById('site-title');
const navigationElements = document.getElementsByTagName('li');
const contentText = document.getElementsByClassName('content-text');
const siteDescription = document.querySelector('#site-description');
const contentDiv= document.querySelector('.content');




// Manipulations
siteTitle.innerText = 'Dynamation space tech';

Array.from(navigationElements).forEach((element) => {
  element.innerText = `--${element.innerText}--`;
});

Array.from(contentText).forEach((element) => {
  element.innerText = element.innerText.toUpperCase();
});

siteDescription.innerText = siteDescription.innerText.replace('Dyn Tech LLC', 'Dynamation space tech');
contentDiv.style.backgroundColor = red;


