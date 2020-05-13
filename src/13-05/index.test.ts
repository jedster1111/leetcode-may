import { removeKDigits } from ".";
import { reallyLongNumber, reallyLongNumberResult } from "./reallyLongNumber";

const cases: { num: number | bigint; k: number; result: string }[] = [
  { num: reallyLongNumber, k: 1000, result: reallyLongNumberResult },
  { num: 1432219, k: 3, result: "1219" },
  { num: 10200, k: 1, result: "200" },
  { num: 1020000000, k: 3, result: "0" },
  { num: 10, k: 2, result: "0" },
  { num: 10, k: 1, result: "0" },
  { num: 1, k: 1, result: "0" },
];

describe("removeKDigits finds the smallest number possible after removing k digits", () => {
  it.each<[number | bigint, number, string]>(
    cases.map(({ num, k, result }) => [num, k, result])
  )(
    "Starting with %i and removing %i digits should give result %s",
    (num, k, result) => {
      expect(removeKDigits(num, k)).toBe(result);
    }
  );
});
