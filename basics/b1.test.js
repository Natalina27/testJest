import { sortAsc } from "./index";

it("should return  sort array", () => {
  const actual = [3, 4, 1, 2];
  const expected = [1, 2, 3, 4];

  expect(sortAsc(actual)).toEqual(expected);
  expect(sortAsc([6, 0, 8, 3, 4])).toEqual([0, 3, 4, 6, 8]);
});
