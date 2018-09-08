/**
 * Assigns own enumerable string keyed properties of source objects to the destination object.
 * Source objects are applied from left to right.
 */

function merge() {}
describe("should merge objects", () => {
  const o1 = { a: 5, b: "hi" };
  const o2 = { c: 20, b: "yes" };
  const o3 = { d: 20, e: true };
  const merged = merge(o1, o2, o3);

  it("should merge two objects", () => {
    expect(merged).toEqual({ a: 5, b: "yes", c: 20, d: 20, e: true });
  });

  it("should not affect passed objects", () => {
    expect(o1).toEqual({ a: 5, b: "hi" });
    expect(o2).toEqual({ c: 20, b: "yes" });
    expect(o3).toEqual({ d: 20, e: true });
  });
});
