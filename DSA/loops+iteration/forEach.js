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

// uppercase the titles

// function titles(array, foo) {
//     for (const item of array) {
//         foo(item)
//     }
// }
// function upperCase(item) {
//     console.log(item.title.toUpperCase())
// }

//lowerCase the titles

books.forEach(item => console.log(item.title.toLowerCase()))