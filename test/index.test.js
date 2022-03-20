var assert = require("assert");
var uniqueArray = require("../src/index");

describe("uniqueArray", function () {
  it("should return duplicate-free version of an array", function () {
    var arr = [1, 2, 3, 1];
    var res = uniqueArray(arr);

    assert.deepStrictEqual(res, [1, 2, 3]);
  });
});
