// ASSESSMENT 5: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest


// --------------------1) Create a function that takes in a string and returns a coded message. The coded message converts 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0.

// I will create a function
// it will take a string as an argument
// it will convert 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0
// it will return the argument with the characters converted

// a) Create a test with expect statements using the variables provided.

// this tests a function called "leet"
describe("leet", () => {
    it("it converts 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0", () => {
        // "leet" will take these variables ...
        const secretCodeWord1 = "Lackadaisical"
        const secretCodeWord2 = "Gobbledygook"
        const secretCodeWord3 = "Eccentric"
        // ... and return them with certain letters converted to numbers
        expect(leet(secretCodeWord1)).toEqual("L4ck4d41s1c4l")
        expect(leet(secretCodeWord2)).toEqual("G0bbl3dyg00k")
        expect(leet(secretCodeWord3)).toEqual("3cc3ntr1c")
    })
})

// RED: ReferenceError: leet is not defined
//      Test failed successfully.

// b) Create the function that makes the test pass.

// this function is called "leet" and it takes a string as an argument
function leet(string) {
    // .replace(/a/gi, "4") looks for a global(g), case insensitive(i) character "a"
    // it then replaces that character with "4". The other .replaces do similar functions 
    return string.replace(/a/gi, "4").replace(/e/gi, "3").replace(/i/gi, "1").replace(/o/gi, "0")
}

// GREEN: Pass
// I tried to refactor it so I only have to use one .replace, but my research shows I can only do that using prototyping (which I am unfamiliar with) and it would actually complicate my code a lot more.

// --------------------2) Create a function that takes in an array of words and a single letter and returns all the words that contain that particular letter.

// I am going to create a function called "letterCheck"
// It will take an array and a single character string as arguments
// It will return an array of strings that contain the same character as the single character string

// a) Create a test with expects statement using the variable provided.


// this tests a function called "leet"
describe("letterCheck", () => {
    it("takes in an array of words and a single letter and returns all the words that contain that particular letter", () => {
        // the function takes an array of words ...
        const arrayOfWords1 = ["Apple", "Banana", "Plum", "Orange", "Kiwi"]
        // ... and a single letter ...
        const letterA = "a"

        const arrayOfWords2 = ["Mango", "Cherry", "Apricot", "Blueberry", "Peach"]
        const letterE = "e"

        // ... and returns all the words that contain that particular letter
        expect(letterCheck(arrayOfWords1, letterA)).toEqual(["Apple", "Banana", "Orange"])
        expect(letterCheck(arrayOfWords2, letterE)).toEqual(["Cherry", "Blueberry", "Peach"])
    })
})

// RED: ReferenceError: letterCheck is not defined
//      Test failed successfully.

// b) Create the function that makes the test pass.

// this function is called "letterCheck"

function letterCheck(array, string) {
    // "filtered" will hold an array of my results
    let filtered = []
    // this for loop will iterate over every element in an array
    for (let i = 0; i < array.length; i++) {
        // if the element (forced to be lowercase) contains the string variable it will return a number greater than 0. If it does not contain the string variable, it will return -1.
        if (array[i].toLowerCase().indexOf(string) >= 0) {
            // any true results will be pushed into "filtered"
            filtered.push(array[i])
        }
    }
    // returning "filtered" returns my results
    return filtered
}

// GREEN: Test successful.
// Let's see if I can refactor this

// I keep getting errors that string ("a") is not a function. Will come back to this.

// const letterCheck = (array, string) => { array.filter(string) }

// --------------------3) Create a function that takes in an array of 5 numbers and determines whether or not the array is a “full house”. A full house is exactly one pair and one three of a kind.

// I will create a function that takes an array
// The array will have 5 numbers
// The function will tell if it has 3 identical numbers and 2 identical numbers

// a) Create a test with expect statements using the variable provided.

// This function is called houseCheck
describe("houseCheck", () => {
    it('takes in an array of 5 numbers and determines whether or not the array is a “full house”', () => {
        // it takes in an array of 4 numbers
        const hand1 = [5, 5, 5, 3, 3]
        const hand2 = [5, 5, 3, 3, 4]
        const hand3 = [5, 5, 5, 5, 4]
        // and returns a Boolean whether the array is a full house
        expect(houseCheck(hand1)).toEqual(true)
        expect(houseCheck(hand2)).toEqual(false)
        expect(houseCheck(hand3)).toEqual(false)

    })
})

// RED: ReferenceError: houseCheck is not defined
//      Test failed successfully.


// b) Create the function that makes the test pass.

// The function houseCheck takes an array of 5 numbers.
function houseCheck(array) {
    // countObj will hold an object where an element in the array is a key and the value will be the number of instances the key appears in the array
    let countObj = {}
    // a for...of loop will go over the elements in the array
    for (let element of array) {
        // for each element we check if the value in already present as a key in countObj. If it is present, we increment it by 1, if not present we initialize it with 1
        countObj[element] = (countObj[element] || 0) + 1
    }

    // Object.values(countObj) returns just the values of an object as an array
    let vals = Object.values(countObj)

    // if the array has 2 duplicates and 3 duplicates OR 
    // if the array has 3 duplicates and 2 duplicates ...
    if ((vals[0] === 2 && vals[1] === 3) || (vals[0] === 3 && vals[1] === 2)) {
        // return true, OTHERWISE ...
        return true
    }
    // ... return false
    return false
}

// GREEN: Test successful.