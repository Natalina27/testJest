/*
The flat() method creates a new array with all sub-array elements
concatted into it recursively up to the specified depth.
*/
function flat() {}

it.skip("should flatten nested array", () => {
  expect(flat([[1, 2, 3], [4], 5])).toBe([1, 2, 3, 4, 5]);
});
