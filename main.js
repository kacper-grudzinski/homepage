const firstName = "Eryk";
const age = 23;

console.log(firstName);
console.log(age);
console.log(`Siema, nazywam się ${firstName} i mam ${age} lata.`);

function greetOld(age, firstName) {
  console.log(`Siema, nazywam się ${firstName} i mam ${age} lata.`);
}

greetOld(age, firstName);

const greet = (age, firstName) => {
  console.log(
    `Witaj Drogi odwiedzający, nazywam się ${firstName} i mam ${age} lat`
  );
};

greet(19, "Kacper");

function calculateOld(myNumber) {
  return myNumber * 7;
}
const myResult = calculateOld(9);
console.log(myResult);

const calculate = (myNumber) => myNumber * 7;

console.log(calculate(7));

function createContent(querySelectorContent, content) {
  const element = document.querySelector(querySelectorContent);
  element.innerHTML = content;
}

createContent(
  ".empty-box__js",
  "Przed tym zawodnikiem świetlana przyszłość w zawodowej piłce nożnej."
);




const deathStar = {
    diameter: 120000,
    fire: (target) => {
        console.log(`${target} destroyed`)
    },
    isOperating: true,
    name: 'Death Star',
    levels: 357,
    population: 10000,
    isLightOn: true,
    commander: {
        name: 'Darth Vader',
        age:50
    }
}

console.log(deathStar)

deathStar.fire('Rebel ship')

console.log(deathStar['levels'])

const myProperty = 'name'

const showMeProperty = (myProperty) => {
    console.log(`Twoja własność ${myProperty} to: ${deathStar[myProperty]}`);
}

showMeProperty('levels')

if(2 === 2) {
  console.log('Kutasi')
}


const myNumber = 7

switch (myNumber){
  case 7:
    console.log('jestem 7')
    break;
  case 9:
    console.log('jestem 9')
    break;
  default:
      console.log('jestem czymś innym')
}

const button = document.querySelector('.action--js');

console.log (button)

button.addEventListener('click', () => {
  const heading = document.querySelector(".main-heading--js");
  heading.innerHTML = `Siema, nazywam się ${firstName} i mam ${age} lata.`;
  heading.classList.add('klasa-z-js') 
});

const hamburger = document.querySelector('.hamburger--js');

hamburger.addEventListener('click', () => {
  const nav = document.querySelector('.header-navigation--js');
  nav.classList.toggle('header-navigation--open');
})