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

// find the total value of the stock

const reducer = (accumulator, item) => {
    //console.log(accumulator, item)
    let total = item.price * item.inventory
    return accumulator += total
}

let overAll = books.reduce(reducer, 0)

//concatenate the titles

const concatTitles = (accumulator, item) => {
    console.log(accumulator, item)
    return accumulator += `${item.title}, `
}

const list = books.reduce(concatTitles, '')