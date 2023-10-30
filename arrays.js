//.push() //
const superheroes = ['catwoman', 'storm', 'jessica jones'];

console.log(superheroes.push('wonderwoman', 'she-hulk'));

//console.log(superheroes);

// unshift() //
const cities = ["Nairobi", "Mombasa"]

console.log(cities.unshift('Nakuru', 'Eldoret', 'Kisumu'));

//console.log(cities)

//spread operator //
const coolTowns = ['Embu', 'Sagana'];

const copyOfCoolTowns = [...coolTowns];

//console.log(copyOfCoolTowns);

const allCoolTowns = ['Naivasha', 'Nanyuki', 'Meru', ...coolTowns]

//console.log(allCoolTowns);

//.pop() //
const weekDays = ['Mon', 'Tue', 'Wed', 'Thur'];

console.log(weekDays.pop());

//console.log(weekDays);

//shift() //
const veges = ['carrots', 'potatoes', 'peas']

console.log(veges.shift());

//console.log(veges);

// .slice() //
const primes = [2, 3, 5, 7];

const copyOfPrimes = primes.slice();

console.log(primes);
console.log(copyOfPrimes);

const evenNos = [2, 4, 6, 8, 10, 12, 14];

console.log(evenNos.slice(1, 4));
//[4, 6, 8]

console.log(evenNos.slice(2));
//[6, 8, 10, 12, 14]

console.log(evenNos.slice(-1))


// .splice() //
const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

//console.log(days.splice(3));
//["Thu", "Fri", "Sat", "Sun"]

console.log(days.splice(2, 3));
//["Wed", "Thu", "Fri"]

const cards = [
    "Ace of Spades",
    "Jack of Clubs",
    "Nine of Clubs",
    "Nine of Diamonds",
    "Three of Hearts",
  ];

// console.log(cards.splice(3, 2, 'Ace of Clubs'));
// console.log(cards)

//bracket notation // 
console.log(cards[3] = 'Ten of Spades');
//'Ten of Spades'
console.log(cards);

// Slicing and Spreading //

const menu = [
    "Jalapeno Poppers",
    "Cheeseburger",
    "Fish and Chips",
    "French Fries",
    "Onion Rings",
  ];
 const newMenu = [
    ...menu.slice(-1),
    "Veggie Burger",
   "House Salad",
   "Teriyaki Tofu",
   ...menu.slice(0,4)
 ]

 console.log(menu);
 console.log(newMenu);
 // ["Onion Rings", "Veggie Burger","House Salad""Teriyaki Tofu", "Jalapeno Poppers","Cheeseburger","Fish and Chips", "French Fries"]