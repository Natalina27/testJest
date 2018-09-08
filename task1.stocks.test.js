/**
 * Implement transform function that converts stocks array
 * into "expected" object
 * - "expected" should have keys equal to company names
 * - buy and sell value is accumulated for the same company
 */
function transform(stocks) {}

const stocks = [
  ["Alibaba", "buy", 3],
  ["Alibaba", "buy", 10],
  ["Alibaba", "sell", 7],

  ["Apple", "buy", 2],
  ["Apple", "buy", 1],
  ["Apple", "buy", 2],
  ["Apple", "sell", 4],

  ["Kodak", "buy", 1],
  ["Kodak", "buy", 4]
];

var expected = {
  Alibaba: { buy: 13, sell: 7 },
  Apple: { buy: 5, sell: 4 },
  Kodak: { buy: 5 }
};

// Do not change this! Used to test transform function
it("Should transform stocks", () => {
  expect(transform(stocks)).toEqual(expected);
});
