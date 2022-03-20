var uniqueArray = function (arr) {
  return arr.filter(function (item, index) {
    return arr.indexOf(item) === index;
  });
};

module.exports = uniqueArray;
