/**
 * Curp is part of @hyfi06/models
 * @copyright Copyright (c) 2023 Héctor Olvera Vital
 * @license MIT
 */

enum Gender {
  FEMALE = 'M',
  MALE = 'H',
}

/**
 * Represents a CURP (Clave Única de Registro de Población), a unique identification code for residents of Mexico.
 *
 * @property {string} id - The CURP string.
 * @property {Date} birthDate - The birth date extracted from the CURP string.
 * @property {number} age - The age of the person, calculated from the birth date.
 * @property {Gender} gender - The gender of the person, extracted from the CURP string.
 * @throws {Error} If CURP is invalid.
 *
 * @example
 * const curpString = 'AAAA000101HXXLNN00';
 * const curp = new Curp(curpString);
 * console.log(curp.birthDate); // Prints: Date object representing the birth date
 * console.log(curp.age); // Prints: age of the person
 * console.log(curp.gender); // Prints: 'H' for male or 'M' for female
 */
class Curp {
  id: string;

  static isCurp(curp: string): boolean {
    const regExpCurp = /[A-Z]{4}[0-9]{6}[HMX][A-Z]{5}[A-Z0-9][0-9]/;
    return regExpCurp.test(curp);
  }

  constructor(curp: string) {
    if (!Curp.isCurp(curp)) throw new Error('Invalid CURP');
    this.id = curp;
  }

  get birthDate(): Date {
    const currentYear = new Date().getFullYear().toString();
    const century =
      this.id.slice(4, 6) > currentYear.slice(2)
        ? parseInt(currentYear.slice(0, 2)) - 1
        : currentYear.slice(0, 2);
    const year = this.id.slice(4, 6);
    const month = this.id.slice(6, 8);
    const day = this.id.slice(8, 10);
    return new Date(`${century}${year}-${month}-${day}GMT-0600`);
  }

  get age(): number {
    const now = +new Date();
    const birthDate = +this.birthDate;
    const yearInMilliseconds = 1000 * 60 * 60 * 24 * 365;
    return Math.floor((now - birthDate) / yearInMilliseconds);
  }

  get gender(): Gender {
    return this.id.slice(10, 11) == 'H' ? Gender.MALE : Gender.FEMALE;
  }
}

export { Curp, Gender };
