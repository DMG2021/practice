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

// Part 1 - version 1

function emailArray() {
  let arr = [];
  data.forEach((element) => {
      arr.push(element.email);
  });
  return arr;
}
console.log(emailArray());

// Part 2 - version 1

function lastNameArray(emailAddress) {
  const fullList = emailArray();
  let afterList = fullList.filter( (item) => {
      return emailAddress != item;
  });
  return afterList;
}


console.log(lastNameArray('shzanbaghi@experiencedmg.com'));

