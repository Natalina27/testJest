function sum(d1, d2) {
  return d1 + d2;
}

it("should return  correct sum", () => {
  expect(sum(3, 6)).toEqual(9);
});
