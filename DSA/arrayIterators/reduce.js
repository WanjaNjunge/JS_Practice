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
    //console.log(accumulator, item)
    return accumulator += `${item.title}, `
}

const list = books.reduce(concatTitles, '')


//reduce the array of products to a single value: the total price
const products = [
  { name: 'Shampoo', price: 4.99 },
  { name: 'Donuts', price: 7.99 },
  { name: 'Cookies', price: 6.49 },
  { name: 'Bath Gel', price: 13.99 }
];

function getTotalAmountForProducts(products) {
  let total = 0;

  for (const item of products) {
    total += item.price
  }
  return total;
}

// let's count the number of coupons we have lying around the house:

const couponLocations = [
  { room: 'Living room', amount: 5 },
  { room: 'Kitchen', amount: 2 },
  { room: 'Bathroom', amount: 1 },
  { room: 'Master bedroom', amount: 7 }
];

function ourReduce(arr, reducer, init) {
  let accum = init;
  for (const item of arr) {
    accum = reducer(accum, item)
  }
  return accum;
}

function couponCounter(totalAmount, location) {
  return totalAmount + location.amount
}

//console.log(ourReduce(couponLocations, couponCounter, 0));

const doubledAndSummed = [1, 2, 3].reduce(function(accumulator, element){ return element * 2 + accumulator}, 0)

// Create a new variable called totalBatteries, which holds the sum of all of the battery amounts in the batteryBatches array.

const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

const totalBatteries = batteryBatches.reduce((accum, element) => {
  return element + accum
}, 0)