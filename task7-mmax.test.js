/**
 * Should transform incoming array of arrays into
 * array where each element is a Max number from corresponding sub-array
 */
function main() {}

it("should transform incoming array with Max number from each element", () => {
  const original = [[5, 10, 2, 14], [1], [9, 28, 3], [1, 2, 3], [3, 2, 1]];
  const expected = [14, 1, 28, 3, 3];

  expect(main(original)).toEqual(expected);
});
