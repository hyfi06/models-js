import { Curp } from '..';

describe('Curp', () => {
  it('should throw an error if the CURP string is invalid', () => {
    const curpString = 'INVALID_CURP';
    expect(() => new Curp(curpString)).toThrow('Invalid CURP');
  });

  it('should correctly calculate the age of the person', () => {
    const curpString = 'AAAA000101HXXLNN00';
    const curp = new Curp(curpString);
    const expectedAge = new Date().getFullYear() - 2000;
    expect(curp.age).toBe(expectedAge);
  });

  it('should correctly calculate the century before 2000', () => {
    const curpString = 'AAAA900101HXXLNN00';
    const curp = new Curp(curpString);
    const expectedYear = 1990;
    expect(curp.birthDate.getFullYear()).toBe(expectedYear);
  });

  it('should correctly calculate the century after 2000', () => {
    const curpString = 'AAAA230101HXXLNN00';
    const curp = new Curp(curpString);
    const expectedYear = 2023;
    expect(curp.birthDate.getFullYear()).toBe(expectedYear);
  });

  it('should correctly determine the gender of male', () => {
    const curpString = 'AAAA000101HXXLNN00';
    const curp = new Curp(curpString);
    expect(curp.gender).toBe('H');
  });

  it('should correctly determine the gender of female', () => {
    const curpString = 'AAAA000101MXXLNN00';
    const curp = new Curp(curpString);
    expect(curp.gender).toBe('M');
  });
});
