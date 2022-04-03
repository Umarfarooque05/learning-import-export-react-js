const pi = 3.1415962;

function doublePi() {
  return pi * 2;
}

function triplePi() {
  return pi * 3;
}

// single value
export default pi;

// when more then one value
// double pi and triple pi are  case sensitive
export { doublePi, triplePi };
