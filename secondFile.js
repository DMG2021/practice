const users = [
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
    }
  ];

  const getNameByEmail = (userEmail) => {
  let results
  users.forEach( (user) => {
    if(userEmail == user.email){
        results = user.name;
    }
  });
  return results;
  };

  const getLastNameByEmail = (userEmail) => {
    if(typeof(userEmail) != "string"){
        if(userEmail == null) {throw new Error("Please enter a valid email address");}
        else {throw new Error("Wrong input type, it should be a string");}
    }
    let results
    users.forEach( (user) => {
      if(userEmail == user.email){
          results = user.lastname;
      }
    });
    if(results == undefined) throw new Error("No user found!");
    return results;
    };

console.log(getLastNameByEmail("kdion@experiencedmg.com"));
