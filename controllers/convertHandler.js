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
    if (result == "") {return 1;}
    var re = /^\d+\.?\d*\/{1}\d+\.\d+(?!\/)|^\d+\.?\d*\/{1}\d+(?![\/\.])|^\d+\.?\d+(?!\/)/;
    result = input.match(re);    
    if (result == null) {return 'invalid number';}
    result = result.join('');
    result = eval(result);    
    return result;
  };
  
  this.getUnit = function(input) {
    var result;
    var re = /gal$|L$|kg$|lbs$|km$|mi$/gi;
    result = input.match(re);    
    if (result == null) {return 'invalid unit'};
    result = result.join('');    
    return result;
  };
  
  this.getReturnUnit = function(initUnit) {
    var result;
    switch (initUnit.toLowerCase()) {
      case 'gal':
        result = 'l'
        break
      case 'l':
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
    console.log(unit);
    
    return unit;
  };
  
  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    var result;
    switch (initUnit.toLowerCase()) {
      case 'gal':
        result = initNum * galToL;
        break
      case 'l':
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
    if (initNum == 'invalid number' && initUnit== 'invalid unit') {return 'invalid number and unit';}
    if (initNum == 'invalid number') {return 'invalid number';}
    if (initUnit== 'invalid unit') {return 'invalid unit';}    
    returnNum = parseInt(returnNum * 100000)/100000;
    var result = initNum + " " + initUnit + " converts to " + returnNum + " " + returnUnit;
    
    return result;
  };
  
}

module.exports = ConvertHandler;
