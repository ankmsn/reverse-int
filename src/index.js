module.exports = function reverse (n) {
  let result = '';
  let strNum = n.toString();
  if (strNum[0] === '-') {strNum = strNum.slice(1)}
  for (i = strNum.length-1; i >= 0; i--) {
       result += strNum[i];
  }
return +result;

}

// console.log(module.exports(-12340));
