const students = [
    {id: 1, name: "Omar sani"},
    {id: 2, name: "mouri"},
    {id: 3, name: "dipjol"},
    {id: 6, name: "vhaijan"}
];

const specificName = students.map(s  => s.name);
const sId = students.map(i => i.id);
const bigger= students.filter(i => i.id  > 1);
const spBigger = students.find(i => i.id > 2);
console.log(specificName);
console.log(sId);
console.log(bigger);
console.log(spBigger);
    

