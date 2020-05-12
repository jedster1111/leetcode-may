import { singleNonDuplicate, singleNonDuplicateLogN } from ".";

const cases: { input: number[]; result: number }[] = [
  { input: [1], result: 1 },
  { input: [1, 1, 2], result: 2 },
  { input: [1, 1, 2, 3, 3], result: 2 },
  { input: [3, 3, 7, 7, 10, 11, 11], result: 10 },
  { input: [1, 1, 2, 3, 3, 4, 4, 8, 8], result: 2 },
  { input: [1, 2, 2, 3, 3, 4, 4, 5, 5], result: 1 },
  { input: [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6], result: 6 },
  { input: [1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6], result: 1 },
];

describe("singleNonDuplicate", () => {
  it.each<[number[], number]>(
    cases.map(({ input, result }) => [input, result])
  )("input %j gives result %i", (input, result) => {
    expect(singleNonDuplicate(input)).toBe(result);
  });
});

describe("singleNonDuplicateLogN", () => {
  it.each<[number[], number]>(
    cases.map(({ input, result }) => [input, result])
  )("input %j gives result %i", (input, result) => {
    expect(singleNonDuplicateLogN(input)).toBe(result);
  });
});
