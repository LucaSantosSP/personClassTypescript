export class Person {
  firstName: string;
  middleName: string;
  lastName: string;
  age: number;
  emails: Array<string> = [
    'fulano@gmail.com',
    'euclides@hotmail.com',
    'pedro@fatec.sp.gov.br',
  ];

  constructor(
    firstName: string,
    middleName: string,
    lastName: string,
    age: number
  ) {
    this.firstName = firstName;
    this.middleName = middleName;
    this.lastName = lastName;
    this.age = age;
  }

  getFullName() {
    return this.firstName + ' ' + this.lastName + ' ' + this.lastName;
  }

  getBirthdayYear() {
    return 2022 - this.age;
  }
}
