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

loopThroughObj(oneBook);