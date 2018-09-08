/**
 * Check if provided string contains only numbers and|or spaces
 */
function onlyNumbers(str) {}

describe("should return true if a string contains only numbers", () => {
  it("should check if string contains only numbers or spaces. Can't be empty", () => {
    expect(onlyNumbers("123")).toBeTruthy();
    expect(onlyNumbers("55555")).toBeTruthy();
    expect(onlyNumbers("99999999123123")).toBeTruthy();
  });

  it("should fail if any character is not a number or an empty string", () => {
    expect(onlyNumbers("abc")).toBeFalsy();
    expect(onlyNumbers("abc123")).toBeFalsy();
    expect(onlyNumbers("123abc123")).toBeFalsy();
    expect(onlyNumbers("123abc123")).toBeFalsy();
  });
});
