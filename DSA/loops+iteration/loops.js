const books = ['Eloquent Javascript', 'Javascript: The Good Parts', 'Learn Javascript VISUALLY', 'You don\'t know JS', 'Javascript: The Definitive Guide']

let oneBook = {
    title: 'Eloquent JavaScript',
    author: 'Marijn Haverbeke',
    publisher: 'No Starch Press'
}

function loopThroughBooks(books) {
    /*for (let i = 0; i < books.length; i++) {
        console.log(books[i]);
    }*/

    for (let book of books) {
        console.log(book);
    }

}

// loopThroughBooks(books);

function loopThroughObj(obj) {
    for (let key in obj) {
        console.log(key);
        console.log(obj[key])
    }
}

// loopThroughObj(oneBook);

/*for (let age = 30; age < 40; age++) {
    console.log(`I'm ${age} years old. Happy birthday to me!`);
  }*/

  /*function writeCards(array, eventName) {
    let messageArray = [];
    for(let i = 0; i < array.length; i++) {
        
        messageArray.push(`Thank you, ${array[i]}, for the wonderful ${eventName} gift`);
        
    }

    return messageArray;

    
  }

  console.log(writeCards(["Charlie", "Samip", "Ali"], "birthday"))

  function countDown(number) {
    let i = number
    while(i >= 0) {
        console.log(i);
        i--;
    }
  }  

  countDown(10) */

  //RECURSION
  
  // let counter = 0;

  function deepIterator(target) {
    // console.log('Argument: ', target);
    // console.log(counter++);

    if (Array.isArray(target)) {
        for (const element of target) {
            deepIterator(element);
        }
    } 
    
    else if (typeof target === 'object') {
        for (const key in target) {
            deepIterator(target[key])
        }
        } else {
        console.log(target);
        }
    };

  const numbers = [1, [2, [4, [5, [6]], 3]]];

  const userInfo = {
    firstName: "Avi",
    lastName: "Flombaum",
    company: {
      name: "Flatbook Labs",
      jobTitle: "Developer Apprentice",
    },
    friends: [
      {
        firstName: "Nancy",
        lastName: "Burgess",
        company: {
          name: "Flatbook Labs",
          jobTitle: "Developer Apprentice",
        },
      },
      {
        firstName: "Corinna",
        lastName: "Jackson",
        company: {
          name: "Flatbook Labs",
          jobTitle: "Lead Developer",
        },
      },
    ],
    projects: [
      {
        title: "Flatbook",
        description:
          "The premier Flatiron School-based social network in the world.",
      },
      {
        title: "Scuber",
        description:
          "A burgeoning startup helping busy parents transport their children to and from all of their activities on scooters.",
      },
    ],
  };
  

  

  // deepIterator(numbers);
  deepIterator(userInfo);

