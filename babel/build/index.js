"use strict";

var add = function add(a, b) {
  return a + b;
};

var obj = {
  a: 1,
  add: add,
  mul: function mul(a, b) {
    return a * b;
  }
};
var mul = obj.mul;
console.log(mul(5, 4));