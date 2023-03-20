const users = [
{
    firstname: "John",
    lastname: "Doe",
    age: 15
},
{
    firstname: "Bruce",
    lastname: "Wayne",
    age: 80
},

{
    firstname: "John",
    lastname: "Mcane",
    age: 60

},
]


for (let i = 0; i < users.length ; i++ )
{
    if (users[i].age >= 21)
    {
        console.log( `${users[i].firstname} ${users[i].lastname}` );
    }
}
  


