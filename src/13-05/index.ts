const numberToDigitsArray = (num: number | bigint): number[] => {
  return [...num.toString()].map((n) => parseInt(n));
};

const stringToDigitArray = (string: string): number[] => {
  return [...string].map((n) => parseInt(n));
};

export const removeKDigits = (num: number | bigint, k: number): string => {
  const digits = numberToDigitsArray(num);

  if (digits.length === k) return "0";

  const remaining = digits.slice(0, k);
  const result = digits.slice(k);

  remaining.reverse().forEach((remainingDigitToCheck) => {
    function doWork(digitToCheck: number, indexOfResultToCheck: number): void {
      if (indexOfResultToCheck > result.length - 1) return;

      const resultDigitToCheck = result[indexOfResultToCheck];
      if (digitToCheck <= resultDigitToCheck) {
        result[indexOfResultToCheck] = digitToCheck;

        doWork(resultDigitToCheck, indexOfResultToCheck + 1);
      }
    }

    doWork(remainingDigitToCheck, 0);
  });

  const firstNon0Index = result.findIndex((r) => r !== 0);

  return result.slice(firstNon0Index).join("");
};
