# @hyfi06/models

## Class

### Class: Career

The `Career` class represents a career at UNAM. It can be instantiated with either a career ID or a career name.

#### Constructor

- `constructor(careerName: string)`: Constructs a `Career` object using a career name.
- `constructor(careerId: number)`: Constructs a `Career` object using a career ID.

#### Properties

- `id` (number): The ID of the career.
- `name` (string): The name of the career.
- `siassId` (number): The SIASS ID of the career.
- `dgeciId` (number, optional): The DGECI ID of the career.

#### Example

```javascript
const careerName = 'Actuaría';
const career1 = new Career(careerName);
console.log(career1.name); // Prints: 'Actuaría'

const careerId = 101;
const career2 = new Career(careerId);
console.log(career2.id); // Prints: 101
```

## Copyright

Copyright (c) 2023 Héctor Olvera Vital

## License

This project is licensed under the [MIT License](LICENSE), which means you are free to use, modify, and distribute the code for both commercial and non-commercial purposes. However, the software is provided "as is," without any warranty or guarantee of its effectiveness or suitability for your specific needs. [Please review the license file for more details](LICENSE).
