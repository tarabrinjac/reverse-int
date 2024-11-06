module.exports = function reverse (n) {
  if (n < 0) {
    n = -n;
  }
  
  const nToString = String(n);
  const nLastMemberIndex = nToString.length - 1;
  const arr = [];
  
  for (let i = nLastMemberIndex; i >= 0; i--) {
    arr.push(nToString[i]);
  }
  return Number(arr.join(''));
}
