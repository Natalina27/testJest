import { sum } from "./utils";
import { mult } from "./utils";

it("should return  correct sum", () => {
  expect(sum(3, 6)).toEqual(9);
  expect(sum(5, 8)).toEqual(13);
  expect(sum()).toBeNull();
  //expect(sum(0, 0)).toEqual(0);
});
