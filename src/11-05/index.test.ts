import { floodFill } from "./index";
import { Image } from "./types";
import { cases } from "./Cases";

type FloodFillParams = [Image, number, number, number, Image];

it.each<FloodFillParams>(
  cases.map(({ image, startX, startY, newColor, result }) => [
    image,
    startY,
    startX,
    newColor,
    result,
  ])
)(
  "test with image %j, starting pos %i,%i, and new color %i",
  (image, startY, startX, newColor, result) => {
    expect(floodFill(image, startY, startX, newColor)).toEqual(result);
  }
);
