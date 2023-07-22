import { Curp, Gender } from '../Curp';
import {
  sanitizeStr,
  areStringsSimilar,
  sanitizeJoin,
} from '@hyfi06/str-utils';

/**
 * Represents a person with various personal details.
 *
 * @property {string} name - The person's name.
 * @property {string} ap1 - The person's first last name.
 * @property {string} ap2 - The person's second last name.
 * @property {string} [degree] - The person's degree.
 * @property {string} [email] - The person's email.
 * @property {string[]} [emails] - The person's emails.
 * @property {Curp} [_curp] - The person's CURP.
 * @property {Gender} [_gender] - The person's gender.
 * @property {string} [charge] - The person's charge.
 * @property {string} [phone] - The person's phone.
 *
 * @example
 * const personObj = {
 *   name: 'John',
 *   lastName: 'Doe',
 *   degree: 'PhD.',
 *   email: 'john.doe@example.com',
 *   curp: 'DOEJ000101HXXLNN00',
 *   gender: Gender.MALE,
 * };
 * const person = new Person(personObj);
 * console.log(person.fullNameByName); // Prints: 'John Doe'
 * console.log(person.degreeFullNameByLastName); // Prints: 'PhD. Doe John'
 */
class Person {
  name: string;
  ap1: string;
  ap2: string;
  degree?: string;
  email?: string;
  emails?: string[];
  _curp?: Curp;
  _gender?: Gender;
  charge?: string;
  phone?: string;

  constructor(person: {
    name?: string;
    lastName?: string;
    ap1?: string;
    ap2?: string;
    degree?: string;
    email?: string;
    emails?: string[];
    curp?: string;
    gender?: Gender;
    charge?: string;
    phone?: string;
  }) {
    const {
      name,
      lastName,
      ap1,
      ap2,
      degree,
      charge,
      curp,
      gender,
      email,
      emails,
      phone,
    } = person;
    this.name = name || '';
    if (lastName && !ap1 && !ap2) {
      this.ap1 = sanitizeStr(lastName);
    } else if (lastName && ap1) {
      if (
        areStringsSimilar(lastName, sanitizeJoin([ap1, ap2])) ||
        areStringsSimilar(lastName, ap1)
      ) {
        this.ap1 = sanitizeStr(ap1);
      } else {
        throw new Error('Inconsistency between lastName and ap1 and ap2');
      }
    } else {
      this.ap1 = sanitizeStr(ap1 || '');
    }
    this.ap2 = sanitizeStr(ap2 || '');

    if (degree) this.degree = sanitizeStr(degree);
    if (charge) this.charge = sanitizeStr(charge);
    if (email) this.email = sanitizeStr(email).toLowerCase();
    if (emails) {
      this.emails = emails.map((email) => sanitizeStr(email).toLowerCase());
      if (this.email && !this.emails.includes(this.email)) {
        this.emails.unshift(this.email);
      } else if (!this.email && this.emails.length) {
        this.email = this.emails[0];
      }
    }
    if (phone) this.phone = phone;

    if (curp) {
      this.curp = sanitizeStr(curp, { toUpperCase: true });
    } else if (gender) {
      this._gender = gender;
    }
  }

  set curp(curp: string) {
    this._curp = new Curp(curp);
    this._gender = this._curp.gender;
  }

  get curp(): string | undefined {
    return this._curp?.id;
  }

  get gender(): Gender | undefined {
    return this._gender;
  }

  get lastName(): string {
    return sanitizeJoin([this.ap1, this.ap2]);
  }

  get fullNameByName(): string {
    return sanitizeJoin([this.name, this.lastName]);
  }

  get fullNameByLastName(): string {
    return sanitizeJoin([this.lastName, this.name]);
  }

  get degreeFullNameByName(): string {
    return sanitizeJoin([this.degree || 'C.', this.fullNameByName]);
  }
  get degreeFullNameByLastName(): string {
    return sanitizeJoin([this.degree || 'C.', this.fullNameByLastName]);
  }

  choiceByGender(female: string, male: string) {
    return this._gender === Gender.FEMALE ? female : male;
  }
}

export { Person };
