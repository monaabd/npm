function isFingerNumber(n) {if(n === undefined)return false;
  else  if (n > 10 || n < 0 ) return false;
  else if (typeof(n) == "string") return false;
  return true;
 
}
module.exports = isFingerNumber;