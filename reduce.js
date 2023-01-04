const arrayOfnumbers=[1,2,3,4];

const sum=arrayOfnumbers.reduce((accumulator,currentValue)=>{
return accumulator+currentValue;
});

console.log(sum);