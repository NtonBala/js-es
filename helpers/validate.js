const checkForNumber = (param) => {
  if (typeof param !== 'number' || isNaN(param) || param >= Number.MAX_SAFE_INTEGER || param <= Number.MIN_SAFE_INTEGER) {
    throw new Error('argument must be a number');
  }
}

const checkForString = (param) => {
  if (typeof param !== 'string') {
    throw new Error('argument must of string type');
  }
}

// module.exports = {
//   checkForNumber,
//   checkForString,
// };
exports.checkForNumber = checkForNumber;
exports.checkForString = checkForString;
