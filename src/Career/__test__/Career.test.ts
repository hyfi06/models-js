import { Career } from '..';
import { getCareerById, getCareerByName } from '@hyfi06/unam-careers';

describe('Career', () => {
  it('should create a Career instance with a career id', () => {
    const id = 101;
    const CAREER = getCareerById(id);
    const career = new Career(id);
    expect(career.id).toBe(id);
    expect(career.name).toBe(CAREER.name);
    expect(career.siassId).toBe(CAREER.siassId);
    expect(career.dgeciId).toBe(CAREER.dgeciId);
  });

  it('should create a Career instance with a career name', () => {
    const CAREER = getCareerById(101);
    const name = CAREER.name;
    const career = new Career(name);
    expect(career.id).toBe(CAREER.id);
    expect(career.name).toBe(CAREER.name);
    expect(career.siassId).toBe(CAREER.siassId);
    expect(career.dgeciId).toBe(CAREER.dgeciId);
  });

  it('should throw an error if no career with the specified id is found', () => {
    const id = -1;
    expect(() => new Career(id)).toThrow('Career not Found');
  });

  it('should throw an error if no career with the specified name is found', () => {
    const name = 'Nonexistent Career';
    expect(() => new Career(name)).toThrow('Career not Found');
  });
});
