//1. A function that returns only emails in one array called email array;
//2. A function with one argument that returns all last name exept the lastname we gave to the function as an argument;
//1. function getEmails() ---> ["shzanbaghi@experiencedmg.com","kdion@experiencedmg.com","sdouglas@experiencedmg.com"];
//2. function filterEmail("shzanbaghi@experiencedmg.com") ---> ["kdion@experiencedmg.com","sdouglas@experiencedmg.com"];

const data = [
  {
    id: 1,
    name: "Shahin",
    lastname: "Zanbaghi",
    email: "shzanbaghi@experiencedmg.com",
  },
  {
    id: 2,
    name: "Kevin",
    lastname: "Dion",
    email: "kdion@experiencedmg.com",
  },
  {
    id: 3,
    name: "Shawn",
    lastname: "Douglas",
    email: "sdouglas@experiencedmg.com",
  },
];

// Part 1

function emailArray() {
  data.forEach((element) => {
    console.log(element.email);
  });
}
console.log(emailArray());

// Part 2

function lastNameArray(lastname, Dion) {
  data.forEach((element) => {
    console.log(element.lastname);
  });
}
console.log(lastNameArray());

// Part 3
