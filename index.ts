import { Person } from './person.ts';

let person = new Person('Lucas', 'Beserra', 'Dos Santos', 22);

const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `
<h1>Classes com Typescript</h1>
<h2>Nome completo: ${person.getFullName()}</h2>
<h2>Nasceu no ano: ${person.getBirthdayYear()}</h2>
<h3>Emails: </h3>
<ul>
  <li>${person.emails[0]}</li>
  <li>${person.emails[1]}</li>
  <li>${person.emails[2]}</li>
</ul>
`;
