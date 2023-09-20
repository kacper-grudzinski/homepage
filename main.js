const firstName = "Eryk";
const age = 23;

console.log(firstName);
console.log(age);
console.log(`Siema, nazywam się ${firstName} i mam ${age} lata.`);

const heading = document.querySelector('.main-heading--js');

heading.innerHTML = `Siema, nazywam się ${firstName} i mam ${age} lata.`

const box = document.querySelector('.empty-box__js')

box.innerHTML = 'Uważam, że ma on przed sobą świetlaną przyszłość'
