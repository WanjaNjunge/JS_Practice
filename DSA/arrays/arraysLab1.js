cats = ["Milo", "Otis", "Garfield"];

/*function destructivelyAppendCat(name) {
    return cats.push(name)
};
console.log(destructivelyAppendCat('Ralph'));*/

/*function destructivelyPrependCat(name) {
    return cats.unshift(name)
};
console.log(destructivelyPrependCat("Bob"));*/

/*function destructivelyRemoveLastCat() {
    return cats.pop()
};
console.log(destructivelyRemoveLastCat());*/

/*function destructivelyRemoveFirstCat() {
    return cats.shift()
};
console.log(destructivelyRemoveFirstCat());*/

function appendCat(name) {
    return newCat = [...cats, name]
};
console.log(appendCat("Broom"));
console.log(cats)

function prependCat(name) {
    return newCat = [name, ...cats]
};
console.log(prependCat("Arnold"));

function removeLastCat() {
    return cats.slice(0, -1)
};
console.log(removeLastCat());

function removeFirstCat() {
    return cats.slice(1)
};
console.log(removeFirstCat());

