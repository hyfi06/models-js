import {
  getCareerById,
  getCareerByName,
  CareerItem,
} from '@hyfi06/unam-careers';

/**
 * Represents a career at UNAM.
 *
 * @property {number} id - The ID of the career.
 * @property {string} name - The name of the career.
 * @property {number} siassId - The SIASS ID of the career.
 * @property {number} [dgeciId] - The DGECI ID of the career.
 *
 * @example
 * const careerName = 'Actuaría';
 * const career1 = new Career(careerName);
 * console.log(career1.name); // Prints: 'Actuaría'
 *
 * const careerId = 101;
 * const career2 = new Career(careerId);
 * console.log(career2.id); // Prints: 101
 */
class Career {
  id: number;
  name: string;
  siassId: number;
  dgeciId?: number;
  constructor(careerName: number);
  constructor(careerId: string);
  constructor(career: number | string) {
    const careerItem: CareerItem =
      typeof career === 'number'
        ? getCareerById(career)
        : getCareerByName(career);

    const { id, name, siassId, dgeciId } = careerItem;
    this.id = id;
    this.name = name;
    this.siassId = siassId;
    this.dgeciId = dgeciId;
  }
}

export { Career };
