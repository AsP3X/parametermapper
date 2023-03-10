/*
###################################################################
## ZOUPA - ZombyMediaIC Open Source Usage Protection Agreement   ##
## December 19, 2022 at 19:00 (UTC+0) | #202212191900            ##
## By Niklas Vorberg (AsP3X)                                     ##
###################################################################
*/
const paraMap = {}

paraMap.convertArgs2Map = (args) => {
  const parameterMap = {};

  // get all parameters that include the string '-'
  const Cparams = args.filter((arg) => arg.includes('-'));

  // check if the following Cparams includes the string '-'
  // if it does, then it is a parameter
  // if it doesn't, then it is a value
  Cparams.forEach((param, index) => {
    if (param.includes('-')) {
      const index = args.indexOf(param);
      
      // check if the following parameter is a value or another parameter
      if (args[index + 1] && !args[index + 1].includes('-')) {
        parameterMap[param] = args[index + 1];
      } else {
        parameterMap[param] = true;
      }
    }
  });

  return parameterMap;
}

paraMap.convertArgs2Array = (args) => {
  const parameterArray = [];

  // get all parameters that include the string '-'
  const Cparams = args.filter((arg) => arg.includes('-'));

  // check if the following Cparams includes the string '-'
  // if it does, then it is a parameter
  // if it doesn't, then it is a value
  Cparams.forEach((param) => {
    if (param.includes('-')) {
      const index = args.indexOf(param);
      
      // check if the following parameter is a value or another parameter
      if (args[index + 1] && !args[index + 1].includes('-')) {
        parameterArray.push(param);
        parameterArray.push(args[index + 1]);
      } else {
        parameterArray.push(param);
      }
    }
  });

  return parameterArray;
}

module.exports = paraMap;