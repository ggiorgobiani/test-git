const users = [
    {
        name: "Eileen",
        gender: "F"
    },
    {
        name: "James",
        gender: "M"
    },
    {
        name: "John",
        gender: "M"
    },
    {
        name: "Marty",
        gender: "M"
    },
    {
        name: "Jane",
        gender: "F"
    },
    {
        name: "Leïa",
        gender: "F"
    },
    {
        name: "Luc",
        gender: "M"
    },
];


const nombrepersonage = users.length
console.log(nombrepersonage);




const males = users.filter(male => male.gender === "M");
const females = users.filter(female => female.gender === "F");

console.log("male:"+ males.length,"female:"+ females.length );




