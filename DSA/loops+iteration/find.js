//will loop through inventory
//find specified object

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


//will loop through inventory
//find specified object

// function loopThroughAndFind(inventory, finder) {
//     let result = null;
//     for (let item of inventory) {
//         if(finder(item) === true) {
//             result = item;
//             break
//         }
//     }

//     return result;
// }
let foundItem1 = books.find(book => book.title === 'Javascript: The Definitive Guide');

let foundItem2 = books.find(firstRestock)

// function isBook(book) {
//     return book.title === 'Javascript: The Definitive Guide';
// }

//find first book to be restocked

function firstRestock(book) {
    return book.inventory < 6
}