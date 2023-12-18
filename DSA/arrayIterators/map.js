let books = [
    {
      title: 'Eloquent Javascript',
      price: 16.50,
     inventory: 3
    },
    {
      title: 'Javascript: The Good Parts',
      price: 10.50,
      inventory: 8
    },
    {
      title: 'Learn Javascript VISUALLY',
      price: 22.00,
      inventory: 15
    },
    {
      title: 'You don\'t know JS',
      price: 60.00,
      inventory: 1
    },
    {
      title: 'Javascript: The Definitive Guide',
      price: 13.95,
      inventory: 21
    }
  ]


// Return a list of titles - NON-DESTRUCTIVELY

/*function loopAndUpdate(array, updaterFunc) {
    let newArray = [];
    for(let item of array) {
        newArray.push(updaterFunc(item));
    }
    return newArray;
}*/


//Return an array of titles
const titles = books.map(item => item.title)

//Return an array of price
function pricesFoo(item) {
    return item.price
}

const prices = books.map(pricesFoo)
//Return an array of inventory
const inventory = books.map(item => item.inventory)

//Return an array of books, 50% off

function halfPriceFoo(item) {
    let itemCopy = Object.assign({}, item)
    itemCopy.price = Math.floor(itemCopy.price / 2);
    return itemCopy;
}

// const halfPriceFoo = books.map(item => {
//   let itemCopy = Object.assign({}, item)
//   itemCopy.price = Math.floor(itemCopy.price / 2)

//   return itemCopy;
// })

const halfPrice = books.map(halfPriceFoo);


// Implementing .map() From Scratch
// Abstracting the iteration

function map(array, callback) {
  const newArr = [];
  for (const element of array) {
    newArr.push(callback(element))
  }

  return newArr;
}

map([1, 2, 3], function(num) {
  //console.log(num * num)
})

const originalNumbers = [1, 2, 3, 4, 5];

const squaredNumbers = map(originalNumbers, function(num) {
  return num * num;
})

// we need to flip each new engineer's account from a normal user to an admin:
const oldAccounts = [
  { userID: 15, title: "Developer Apprentice", accessLevel: "user" },
  { userID: 63, title: "Developer Apprentice", accessLevel: "user" },
  { userID: 97, title: "Developer Apprentice", accessLevel: "user" },
  { userID: 12, title: "Developer Apprentice", accessLevel: "user" },
  { userID: 44, title: "Developer Apprentice", accessLevel: "user" },
];


const newEngineers = map(oldAccounts, function(account) {
  return Object.assign({}, account, { accessLevel: "admin" })
})

// we just need a simple array of the new engineers' userIDs
const userIDs = map(oldAccounts, function(account) {
  return account.userID
})

//update our engineer objects to indicate that all the new engineers have been provided a new work laptop.

const equippedEng = oldAccounts.map((eng) => Object.assign({}, eng, { equipment: "Laptop" }))


/**
 * we have an array of robots. We want to activate all of them. To activate a robot, we need to mark it as such using the isActivated boolean, and also double its number of modes:
 */

const robots = [
  { name: "Johnny 5", modes: 5, isActivated: false },
  { name: "C3PO", modes: 3, isActivated: false },
  { name: "Sonny", modes: 2.5, isActivated: false },
  { name: "Baymax", modes: 1.5, isActivated: false },
];

const activatedRobots = robots.map((robot) => {
  return Object.assign({}, robot, { modes: robot.modes * 2, isActivated: true })
})

// Create a new array containing the names of the tutorials with proper title case formatting.
const tutorials = [
  "what does the this keyword mean?",
  "What is the Constructor OO pattern?",
  "implementing Blockchain Web API",
  "The Test Driven Development Workflow",
  "What is NaN and how Can we Check for it",
  "What is the difference between stopPropagation and preventDefault?",
  "Immutable State and Pure Functions",
  "what is the difference between == and ===?",
  "what is the difference between event capturing and bubbling?",
  "what is JSONP?",
];
/*
 * Map through array
 * For every element/sentence, put to lowercase
 * Then use split method to turn the sentence into an array, each word as an element
 * loop through the new array of words, uppercase the first character
 * Concatenate with the other characters using slice method
 * Put the words together using join method
 * 
 */

const capitalized = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

const titleCased = () => {
  return tutorials.map(tutorial => {
    const words = tutorial.split(' ')
    const capitalizedWords = words.map(word => capitalized(word));
    return capitalizedWords.join(' ')
  })
}

console.log(titleCased());