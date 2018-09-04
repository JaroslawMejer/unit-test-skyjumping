const reducer = (accumulator, currentValue) => accumulator + currentValue;

const calculateStylePoints = (styleNotes) => {
  let min = Math.min.apply(null, styleNotes);
  let max = Math.max.apply(null, styleNotes);
  var resultValue = styleNotes.reduce(reducer);
  
  if (!isNaN(resultValue) && resultValue > 0 && styleNotes.length == 5 && resultValue <= 100){
  	return resultValue - min - max
  } else {
  	return 'Error';
  }
};

module.exports = calculateStylePoints;