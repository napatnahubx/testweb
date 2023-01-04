const array =[15,16,17,18,19];

function reducer(accumulator,currentValue,index){
   const returns = accumlator + currentVaule;
   console.log(
    `accumulator: ${accumulator},currentVaule: ${currentValue},index: ${index},returns: ${returns}`,
   );
   return returns;
}
array.reduce(reducer);