import { Operator } from '../contracts/interfaces';

/**
 * Help sort object by date desc inside an array
 * @param arr -- Operator[]
 * @returns object sorted by date (desc)
 */
const sortDates = (arr: Operator[]) => arr.sort((a: Operator, b: Operator) => Date.parse(b.date) - Date.parse(a.date))

export default sortDates
