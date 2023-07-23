# Class: Person

The `Person` class represents a person with various personal details.

## Constructor

- `constructor(person: object)`: Constructs a `Person` object using a person object.

## Properties

- `name` (string): The person's name.
- `ap1` (string): The person's first last name.
- `ap2` (string): The person's second last name.
- `degree` (string, optional): The person's degree.
- `email` (string, optional): The person's email.
- `emails` (string[]): The person's emails.
- `_curp` (Curp, optional): The person's CURP.
- `_gender` (Gender, optional): The person's gender.
- `charge` (string, optional): The person's charge.
- `phone` (string, optional): The person's phone.

## Methods

- `set curp(curp: string)`: Sets the person's CURP.
- `get curp(): string | undefined`: Gets the person's CURP.
- `get gender(): Gender | undefined`: Gets the person's gender.
- `get lastName(): string`: Gets the person's last name.
- `get fullNameByName(): string`: Gets the person's full name by name.
- `get fullNameByLastName(): string`: Gets the person's full name by last name.
- `get degreeFullNameByName(): string`: Gets the person's degree full name by name.
- `get degreeFullNameByLastName(): string`: Gets the person's degree full name by last name.
- `choiceByGender(female: string, male: string)`: Chooses a string based on the person's gender.

## Example

```javascript
const personObj = {
  name: 'John',
  lastName: 'Doe',
  degree: 'PhD.',
  email: 'john.doe@example.com',
  curp: 'DOEJ000101HXXLNN00',
  gender: Gender.MALE,
};
const person = new Person(personObj);
console.log(person.fullNameByName); // Prints: 'John Doe'
console.log(person.degreeFullNameByLastName); // Prints: 'PhD. Doe John'
```
