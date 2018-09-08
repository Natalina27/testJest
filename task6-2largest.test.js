function findSecondLargest(input) {}

it("should find second largest in array", () => {
  expect(findSecondLargest([3, 5, 8, 8, 1, 9, 2, 2, 3, 10])).toEqual(9);
  expect(findSecondLargest([11, 3, 5, 8, 8, 1, 9, 2, 2, 3, 10])).toEqual(10);
  expect(findSecondLargest([30, 30, 11, 3, 5, 8, 8, 19, 30, 2, 3, 10])).toEqual(
    19
  );
});
