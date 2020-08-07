//slice
const num = [1, 2, 3, 4, 5, 6, 7,8];
const part = num.slice(2,5);
const removed = num.splice(2, 6);
const jointKoro= num.join(",");

console.log(part);
console.log(removed);
console.log(jointKoro);


