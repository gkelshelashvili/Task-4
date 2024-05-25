const replaceString = (string,valueToReplace,valueToReplaceWith) => {

}

const replaceWithUpperCase = (sentance) => {

}

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