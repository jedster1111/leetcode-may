import { Image } from "./types";

export type Case = {
  image: Image;
  startX: number;
  startY: number;
  newColor: number;
  result: Image;
};

const case1: Case = {
  image: [
    [0, 0, 0],
    [1, 0, 0],
  ],
  startX: 0,
  startY: 1,
  newColor: 2,
  result: [
    [0, 0, 0],
    [2, 0, 0],
  ],
};

const case2: Case = {
  image: [
    [1, 1, 1],
    [1, 1, 0],
    [1, 0, 1],
  ],
  startX: 1,
  startY: 1,
  newColor: 2,
  result: [
    [2, 2, 2],
    [2, 2, 0],
    [2, 0, 1],
  ],
};

const case3: Case = {
  image: [
    [0, 0, 0],
    [0, 1, 1],
  ],
  startX: 1,
  startY: 1,
  newColor: 1,
  result: [
    [0, 0, 0],
    [0, 1, 1],
  ],
};

export const cases = [case1, case2, case3];
