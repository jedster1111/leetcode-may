import { Image } from "./types";

const isInRange = (col: number, row: number, array: unknown[][]): boolean =>
  col < 0 || col + 1 > array[0].length || row < 0 || row + 1 > array.length;

const directions = [
  [0, -1],
  [1, 0],
  [0, 1],
  [-1, 0],
] as const;

export const floodFill = function (
  image: Image,
  startingRow: number,
  startingCol: number,
  newColor: number
): Image {
  const originalColor = image[startingRow][startingCol];
  if (originalColor === newColor) return image;

  function doWork(col: number, row: number): void {
    if (isInRange(col, row, image)) return;

    if (image[row][col] === originalColor) {
      image[row][col] = newColor;
    } else {
      return;
    }
    directions.forEach(([dx, dy]) => {
      doWork(col + dx, row + dy);
    });
  }

  doWork(startingCol, startingRow);

  return image;
};
