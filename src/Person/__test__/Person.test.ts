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
      charge: 'Teacher',
      phone: '1234567890',
    };
    const person = new Person(personObj);
    expect(person.fullNameByName).toBe('John Doe');
    expect(person.degreeFullNameByLastName).toBe('PhD. Doe John');
    expect(person.degreeFullNameByName).toBe('PhD. John Doe');
    expect(person.email).toBe(personObj.email);
    expect(person.charge).toBe(personObj.charge);
    expect(person.curp).toBe(personObj.curp);
    expect(person.phone).toBe(personObj.phone);
  });

  it('should create a Person instance with lastName, ap1 consistent', () => {
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
    expect(person.gender).toBe(Gender.MALE);
    expect(person.choiceByGender('female', 'male')).toBe('male');
  });

  it('should correctly assign gender', () => {
    const personObj = {
      name: 'John',
      lastName: 'Doe',
      gender: Gender.FEMALE,
    };
    const person = new Person(personObj);
    expect(person.choiceByGender('female', 'male')).toBe('female');
  });

  it('should correctly assign email', () => {
    const personObj = {
      name: 'John',
      lastName: 'Doe',
      email: 'john.doe@example.com',
    };
    const person = new Person(personObj);
    expect(person.email).toBe('john.doe@example.com');
    expect(person.emails).toEqual(['john.doe@example.com']);
  });

  it('should correctly assign emails', () => {
    const personObj = {
      name: 'John',
      lastName: 'Doe',
      emails: ['john.doe@example.com', 'jdoe@example.com'],
    };
    const person = new Person(personObj);
    expect(person.emails).toEqual(['john.doe@example.com', 'jdoe@example.com']);
    expect(person.email).toBe('john.doe@example.com');
  });

  it('should correctly assign default values', () => {
    const personObj = {};
    const person = new Person(personObj);
    expect(person.emails).toEqual([]);
    expect(person.name).toBe('');
    expect(person.fullNameByName).toBe('');
    expect(person.degreeFullNameByName).toBe('C.');
    expect(person.degreeFullNameByLastName).toBe('C.');
    expect(person.curp).toBeUndefined();
  });
});
