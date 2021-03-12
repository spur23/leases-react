import { AssetMonthly } from "../classes/Asset/AssetMonthly";
import { LeaseClassification } from "../enums";
import { LiabilitySchedulePrint } from "../interfaces";
import { addMonth } from "./addMonth";

const calculateAssetSchedule = (
  data: {
    liabilitySchedule?: LiabilitySchedulePrint[];
    totalPayments?: number;
    classification: LeaseClassification;
    startDate: Date;
    life: number;
    startingBalance: number;
    monthlyDepreciation?: number;
  },
  straightLineRent?
) => {
  const {
    startDate,
    life,
    startingBalance,
    monthlyDepreciation,
    liabilitySchedule,
    classification,
  } = data;

  let result = [];

  for (let i = 0; i < life; i++) {
    let depreciation = monthlyDepreciation;

    if (i === 0) {
      if (classification === LeaseClassification.OPERATING) {
        depreciation = straightLineRent - liabilitySchedule[i].interestExpense;
      }
      const month = new AssetMonthly(startDate, startingBalance, depreciation);

      result.push(month);
    } else {
      const { endingBalance } = result[i - 1].getMonthlyData();
      if (classification === LeaseClassification.OPERATING) {
        depreciation = straightLineRent - liabilitySchedule[i].interestExpense;
      }

      const nextMonth = addMonth(startDate, i);
      const month = new AssetMonthly(nextMonth, endingBalance, depreciation);

      result.push(month);
    }
  }

  return result;
};

export default calculateAssetSchedule;
