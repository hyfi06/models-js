import { Person } from '..';
import { Gender } from '../../Curp';

describe('Person', () => {
  it('should create a Person instance with a valid person object', () => {
    const personObj = {
      name: 'John',
      lastName: 'Doe',
      degree: 'PhD.',
      email: 'john.doe@example.com',
      curp: 'DOEJ000101HXXLNN00',
      gender: Gender.MALE,
    };
    const person = new Person(personObj);
    expect(person.fullNameByName).toBe('John Doe');
    expect(person.degreeFullNameByLastName).toBe('PhD. Doe John');
  });

  it('should join ap1 and ap2 in lastName', () => {
    const personObj = {
      name: 'John',
      ap1: 'Doe',
      ap2: 'Doe',
      degree: 'PhD.',
      email: 'john.doe@example.com',
      curp: 'DOEJ000101HXXLNN00',
      gender: Gender.MALE,
    };
    const person = new Person(personObj);
    expect(person.lastName).toBe('Doe Doe');
  });

  it('should create a Person instance with lastName, ap1, ap2 consistent', () => {
    const personObj = {
      name: 'John',
      ap1: 'Doe',
      lastName: 'Doe',
      degree: 'PhD.',
      email: 'john.doe@example.com',
      curp: 'DOEJ000101HXXLNN00',
      gender: Gender.MALE,
    };
    const person = new Person(personObj);
    expect(person.lastName).toBe('Doe');
  });


  it('should throw an error if the lastName and ap1 and ap2 are inconsistent', () => {
    const personObj = {
      name: 'John',
      lastName: 'Doe',
      ap1: 'Smith',
    };
    expect(() => new Person(personObj)).toThrow(
      'Inconsistency between lastName and ap1 and ap2',
    );
  });

  it('should correctly determine the gender of the person', () => {
    const personObj = {
      name: 'John',
      lastName: 'Doe',
      curp: 'DOEJ000101HXXLNN00',
    };
    const person = new Person(personObj);
    expect(person.choiceByGender('female', 'male')).toBe('male');
  });
});
