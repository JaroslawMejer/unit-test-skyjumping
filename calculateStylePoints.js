const reducer = (accumulator, currentValue) => accumulator + currentValue;

const calculateStylePoints = (styleNotes) => {
  let min = Math.min.apply(null, styleNotes);
  let max = Math.max.apply(null, styleNotes);
  var filteredStyleNotes = styleNotes.filter((e) => {return e != min && e != max})
  var resultValue = filteredStyleNotes.reduce(reducer);
  
  if (!isNaN(resultValue) && resultValue > 0 && styleNotes.length == 5 && resultValue <= 100){
  	return resultValue 
  } else {
  	return 'Error';
  }
};

module.exports = calculateStylePoints;