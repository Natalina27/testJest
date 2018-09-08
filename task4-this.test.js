var Builder = function(name) {
  this.name = name;
  this.m1 = function() {
    return this;
  };
};

Builder.prototype.m2 = function() {
  return this;
};

Builder.prototype.getName = function() {
  return this.name;
};

var one = new Builder("one");
var two = new Builder("two");

// Please type your answer:
one.m1(); // output:
one.m2(); // output:

two.m1(); // output:
two.m2(); // output:

one.m1() === one.m2(); // output:
one.m1() === two.m1(); // output:

const oneName = one.getName;
oneName() === one.name;

it("oneName should return name", () => {
  expect(oneName() === one.name);
});
