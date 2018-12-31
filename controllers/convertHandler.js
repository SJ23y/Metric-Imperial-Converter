/*
*
*
*       Complete the handler logic below
*       
*       
*/

function ConvertHandler() {
  
  this.getNum = function(input) {
    var result = input.split(/[a-zA-Z]/,1)[0]; 
    var re = /\d+\.?\d+|\d+\.?\d+\/?\d+\.?\d+/;
    result = input.match(re);    
    if (!result) {result = 'invalid number';};
    result = result.join('');
    result = eval(result);    
    return result;
  };
  
  this.getUnit = function(input) {
    var result;
    var re = /gal$|L$|kg$|lbs$|km$|mi$/gi;
    result = input.match(re);
    if (!result) {return ""};
    result = result.join('');    
    return result;
  };
  
  this.getReturnUnit = function(initUnit) {
    var result;
    switch (initUnit) {
      case 'gal':
        result = 'L'
        break
      case 'L':
        result = 'gal'
        break
      case 'mi':
        result = 'km'
        break
      case 'km':
        result = 'mi'
        break
      case 'lbs':
        result = 'kg'
        break
      case 'kg':
        result = 'lbs'
        break
      default:
        result = 'invalid unit'
                    }
    return result;
  };

  this.spellOutUnit = function(unit) {
    var result;
    
    return result;
  };
  
  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    var result;
    switch (initUnit) {
      case 'gal':
        result = initNum * galToL;
        break
      case 'L':
        result = initNum / galToL;
        break
      case 'mi':
        result = initNum * miToKm;
        break
      case 'km':
        result = initNum / miToKm;
        break
      case 'lbs':
        result = initNum * lbsToKg;
        break
      case 'kg':
        result = initNum / lbsToKg;
        break
      default:
        result = ''
                    }
    return result;
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    returnNum = parseInt(returnNum * 100000)/100000;
    var result = initNum + " " + initUnit + " converts to " + returnNum + " " + returnUnit;
    
    return result;
  };
  
}

module.exports = ConvertHandler;
