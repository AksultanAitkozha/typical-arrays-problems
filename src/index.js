
exports.min = function min (array) {
    if (!arr || arr.length == 0) {
        return 0;
    }
    var len = arr.length, min = Infinity;
    while (len--) {
        if (arr[len] < min) {
            min = arr[len];
        }
    }
    return min;
}

exports.max = function max (array) {
  if (!arr || arr.length == 0) {
    return 0;
  }
  var len = arr.length, max = -Infinity;
  while (len--) {
    if (arr[len] > max) {
      max = arr[len];
    }
  }
  return max;
}

exports.avg = function avg (array) {
  if (!arr || arr.length == 0) {
        return 0;
    }
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += Number(arr[i]);
    }
    return sum / arr.length;
}
