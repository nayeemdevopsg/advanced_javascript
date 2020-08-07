const num = [4, 5, 6, 7, 10];
// const doubleAr = [];
// for (let i = 0; i < num.length ; i++){
//     let double = num[i] * num[i];
//     doubleAr.push(double);   
// }
// console.log(doubleAr);

const numbers = num.map(function(elements){
    //    console.log(elements * elements, index, array); 
    //   return elements;
    return elements * elements;
})

const bigger = num.filter( x => x > 5);
const smaller = num.find(x => x < 5);

console.log(smaller);
console.log(bigger);





