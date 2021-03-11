import {
  getFirstDay,
  getLastDay,
  getNextDay,
  monthCorrection,
  checkDateIsAfter
} from './dateFunctions';
import {
  formatDate,
  capitalizeFirstLetter,
  formatNumberDecimal,
  formatNumberPercent
} from './formatting';
import { createLease, generatePaymentStream } from './createLease';
import { createExcelData } from './createExcelData';
import { discountRate } from './discountRate';
import { calculatePresentValue } from './calculatePresentValue';

export {
  getFirstDay,
  getLastDay,
  getNextDay,
  monthCorrection,
  checkDateIsAfter,
  formatDate,
  createLease,
  createExcelData,
  capitalizeFirstLetter,
  formatNumberDecimal,
  formatNumberPercent,
  discountRate,
  generatePaymentStream,
  calculatePresentValue
};
