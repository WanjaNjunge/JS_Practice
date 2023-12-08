const users = [
    {
      firstName: "Niky",
      lastName: "Morgan",
      favoriteColor: "Blue",
      favoriteAnimal: "Jaguar",
    },
    {
      firstName: "Tracy",
      lastName: "Lum",
      favoriteColor: "Yellow",
      favoriteAnimal: "Penguin",
    },
    {
      firstName: "Josh",
      lastName: "Rowley",
      favoriteColor: "Blue",
      favoriteAnimal: "Penguin",
    },
    {
      firstName: "Kate",
      lastName: "Travers",
      favoriteColor: "Red",
      favoriteAnimal: "Jaguar",
    },
    {
      firstName: "Avidor",
      lastName: "Turkewitz",
      favoriteColor: "Blue",
      favoriteAnimal: "Penguin",
    },
    {
      firstName: "Drew",
      lastName: "Price",
      favoriteColor: "Yellow",
      favoriteAnimal: "Elephant",
    },
  ];

  //print out everyone's first name

  function firstNameList(collection) {
    for (const item of collection) {
        //console.log(item.firstName)
    }
  }
  firstNameList(users);

  //print out only users whose favorite color is blue

  function blueUsers(collection) {
    for (const item of collection) {
        if (item.favoriteColor === 'Blue') {
            //console.log(item.firstName)
        }
    }
  }
  blueUsers(users);

  //pass in the color that we want to filter 
  function colorFilter(collection, color) {
    for (const item of collection) {
        if (item.favoriteColor === color) {
            //console.log(item.firstName)
        }
    }
  }
  colorFilter(users, 'Red');

  //filter our users based on whose favorite animal is a jaguar

  function filter(collection, attribute, value) {
    for (const item of collection) {
        if (item[attribute] === value) {
            //console.log(item.firstName)
        }
    }
  }

  filter(users, "favoriteAnimal", "Jaguar")

  //abstract the filter  function to find users whose favourite animal is an elephant

  function filterFoo(collection) {
    for (const item of collection) {
        if (likesElephants(item)) {
            //console.log(item.firstName)
        }
    }
  }

  //extract the comparison logic into a separate function
  function likesElephants(item) {
    return item.favoriteAnimal === 'Elephant';
  }
  filterFoo(users)

  //filter using a callback function
  function filterUsingCB(collection, cb){
    for (const item of collection) {
        if (cb(item)) {
            console.log(item.firstName)
        }
    }
  }

  filterUsingCB(users, function(item) {
    return item.favoriteColor === "Blue" && item.favoriteAnimal === "Penguin";
  })

  filterUsingCB(users, function(item) {
    return item.favoriteColor === "Yellow"
  })

  //Here's a pure take on our randomMultiplyAndFloor() function:

//   function randomMultiplyAndFloor() {
//     return Math.floor(Math.random() * 100);
//   }
  
//   randomMultiplyAndFloor();
//   // => 53
//   randomMultiplyAndFloor();
//   // => 66

function multiplyAndFloor(num) {
    return Math.floor(num *100)
}

const randNum = Math.random()

randNum;

multiplyAndFloor(randNum);

/*
And one that returns a new object instead of mutating the passed-in object:

const ada = {
  name: "Ada Lovelace",
  age: 202,
};

function happyBirthday(person) {
  console.log(
    `Happy birthday, ${person.name}! You're ${++person.age} years old!`
  );
}

happyBirthday(ada);
// LOG: Happy birthday, Ada Lovelace! You're 203 years old!

happyBirthday(ada);
// LOG: Happy birthday, Ada Lovelace! You're 204 years old!

ada;
// => {name: "Ada Lovelace", age: 204}
*/

const adaAge202 = {
    name: "Ada Lovelace",
    age: 202,
  };

function happyBirthday(person) {
    const newPerson = Object.assign({}, person, { age: person.age + 1 })

    console.log(`Happy birthday ${newPerson.name}! You are ${newPerson.age} years old.`)

    return newPerson;
}

const adaAge203 = happyBirthday(adaAge202);