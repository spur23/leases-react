import { GeneratedLease } from '../../interfaces';
import { capitalizeFirstLetter } from './index';
import { formatNumberPercent } from './formatting';

export const createExcelData = (lease: GeneratedLease): any[] => {
  const obj = { ...lease };

  const assetSchedule = obj.asset.map((month) => [
    month.date,
    month.beginningBalance,
    month.depreciation,
    month.endingBalance
  ]);

  const liabilitySchedule = obj.liability.map((month) => [
    month.date,
    month.beginningBalance,
    month.payment,
    month.interestExpense,
    month.interestPayment,
    month.principal,
    month.endingBalance,
    month.shortTermBalance,
    month.longTermBalance
  ]);

  const result = [
    {
      columns: [''],
      data: [
        ['Name: ', capitalizeFirstLetter(obj.lease)],
        ['Description: ', capitalizeFirstLetter(obj.description)],
        ['Classificatoin: ', capitalizeFirstLetter(obj.classification)],
        ['Prepaid', obj.prepaid],
        ['Discount Rate: ', formatNumberPercent(obj.interestRate)],
        ['Total Payments: ', obj.totalPayments],
        ['Present Value: ', obj.presentValue],
        ['Start Date: ', obj.startDate],
        ['End Date: ', obj.endDate]
      ]
    },
    { ySteps: 5, columns: ['Asset Schedule'], data: [['']] },
    {
      // xSteps: 1, // Will start putting cell with 1 empty cell on left most
      ySteps: -1, //will put space of 5 rows,
      columns: ['Date', 'Beginning Balance', 'Depreciation', 'Ending Balance'],
      data: assetSchedule
    },
    {
      ySteps: -assetSchedule.length - 2,
      xSteps: 6,
      columns: ['Liability Schedule'],
      data: [['']]
    },
    {
      ySteps: -1,
      xSteps: 6,
      columns: [
        'Date',
        'Beginning Balance',
        'Payment',
        'Interest Expense',
        'Interest Payment',
        'Principal',
        'Ending Balance',
        'Short Term Balance',
        'Long Term Balance'
      ],
      data: liabilitySchedule
    }
  ];

  return result;
};
