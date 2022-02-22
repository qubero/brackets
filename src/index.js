module.exports = function check(str, bracketsConfig) {
  if (str.length % 2) {
    return false;
  }

  const trueStartSet = new Set();
  let stack = [];

  const config = bracketsConfig.reduce((cfg, pair) => {
    trueStartSet.add(pair[0]);
    cfg[pair[1]] = pair[0];

    return cfg;
  }, {});


  for (let i = 0; i < str.length; i++) {
    let current = str[i];
    if (stack.length && stack[stack.length - 1] === config[current]) {
      stack.pop();
    } else if (trueStartSet.has(current)) {
      stack.push(current);
    } else {
      return false;
    }
  }

  return !stack.length;
}
