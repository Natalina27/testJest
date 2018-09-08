/**
 * Define Person class (ES6) or constructor function (ES5)
 * that has a getter method returning fullName which is a combination
 * of firstName and lastName (look test for details)
 */

// Make it PASS!
describe("should implement Person", () => {
  const person = new Person({ firstName: "John", lastName: "Doe" });

  it("should have name method that returns First Last name as a string", () => {
    expect(person.name()).toBe("John Doe");
  });

  it.skip("bonus! should have a getter field that returns full name", () => {
    expect(person.fullName).toBe("John Doe");
  });
});
