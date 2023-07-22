# Class: Curp

The `Curp` class represents a CURP (Clave Única de Registro de Población), a unique identification code for residents of Mexico.

## Constructor

- `constructor(curp: string)`: Constructs a `Curp` object using a CURP string.

## Static Methods

- `isCurp(curp: string): boolean`: Checks if a string is a valid CURP.

## Properties

- `id` (string): The CURP string.
- `birthDate` (Date): The birth date extracted from the CURP string.
- `age` (number): The age of the person, calculated from the birth date.
- `gender` (Gender): The gender of the person, extracted from the CURP string.

## Throws

- (Error): If CURP is invalid.

## Example

```javascript
const curpString = 'AAAA000101HXXLNN00';
const curp = new Curp(curpString);
console.log(curp.birthDate); // Prints: Date object representing the birth date
console.log(curp.age); // Prints: age of the person
console.log(curp.gender); // Prints: 'H' for male or 'M' for female
```
