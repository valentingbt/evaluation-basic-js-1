var removeNegativeValue = function(values) {
  var filteredValues = [];
  var z = 0;
  if (values == null) {
    filteredValues = [];
  } else {
  for (var i = 0; i < values.length; i++) {
      if (values[i]>=0) {
        filteredValues[z]=values[i];
        z=z+1;
      }
  }
}
  return filteredValues;
}

module.exports = {
  title: 'Exercise 1',
  run: removeNegativeValue
}