const computeReturns = function (principal, rateOfInterest = 8, tenure = 10) {
  return principal + (principal * rateOfInterest * tenure) / 100;
};