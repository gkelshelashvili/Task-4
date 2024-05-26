const replaceString = (string,valueToReplace,valueToReplaceWith) => {
    let result = '';
    let first = 0;
    let last = 0;

    if((first = string.indexOf(valueToReplace, last)) !== -1) {
        result += string.substring(last, first) + valueToReplaceWith;
        last = first + valueToReplace.length;
    }
    result += string.substring(last);

    return result;
}

console.log(replaceString('gela', 'g', 'T'))

const replaceWithUpperCase = (sentance) => {    

    const words = sentance.split(' ')

    let wordsUpdated = words.map(function (maped_words) {
        return maped_words.charAt(0).toUpperCase() + maped_words.slice(1).toLowerCase()
    })


    return wordsUpdated.join(' ')
    
}
console.log(replaceWithUpperCase('naxes ucxo moyme vinme'))

const users = [
    {name: "Lasha", age: 30},
    {name: "Gio", age: 21},
    {name: "Saba", age: 32},
    {name: "Nika", age: 11},
    {name: "Guka", age: 5},
    {name: "Jeka", age: 765}
]

const sortByAge = users.sort(function (a,b) {
    return a.age - b.age
})

console.log(sortByAge);