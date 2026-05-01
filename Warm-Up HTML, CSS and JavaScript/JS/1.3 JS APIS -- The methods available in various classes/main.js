const str = "Joy Dutta";
console.log(str.length);

function findIndexOf(str, target) {
    console.log("Original String:", str);
    console.log("Index:", str.indexOf(target));
}

findIndexOf("Hello World World", "World");

// slice does not include the last index. s
// start from starting index to end 
function getSlice(str, start, end) {
  console.log("Original String:", str);
  console.log("After slice:", str.slice(start, end));
}

getSlice("Hello World", 0, 5);
// Output: Hello

// substring is not used any more. 
const text = "Hello there, we are all doing fine"
let txt = text.substr(2, 5); // start from 2 +  get 5 chars
console.log(txt);

// slice implementation
function cutIt(str, startIndex, endIndex) {
    let newStr = "";
    for (let i = 0; i < str.length; i++) {
        // Only add characters to the new string if the 
        // index is within your specified range
        if (i >= startIndex && i <= endIndex) {
            newStr = newStr + str[i];
        }
    }
    return newStr; // Don't forget to return the result!
}

console.log(cutIt("Hare Krishna Hare Rama", 5, 12))

// replace method
const txt1 = "Hello World";
console.log(txt1.replace("World", "matey"));

// split
const sentenceToSplit = "Hello, there! How are you doing?"
console.log(sentenceToSplit.split(" "));

const txt2 = "Hi,my,name,is,joy"
console.log(txt2.split(","));

// trim --> takes away the spaces from left and right 
const txt3 = "     Hello";
console.log(txt3.trim());

// uppeer & lower casing with toUpper() , toLower()
console.log("Joy Dutta".toLowerCase());
console.log("joy dutta".toUpperCase());


// parseInt()
function explainParseInt(value) {
    console.log("Original Value:", value);
    let result = parseInt(value);
    console.log("After parseInt:", result);
}

// Example Usage for parseInt
explainParseInt("42");
explainParseInt("42px");
explainParseInt("3.14");

// push to insert at the back, pop to remove element from the back
const initialArray = [1, 2, 3];
initialArray.push(2);
console.log(initialArray);

// shift to remove and  unshift to add at the front
const nums1 = [1,2, 3]
console.log(nums1.shift());
console.log(nums1);

// merge 2 arrays

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

for (let i = 0; i < arr2.length; i++) {
    arr1.push(arr2[i]);
}

const arr3 = [1, 2, 3];
const arr4 = [4, 5, 6];
console.log(arr3.concat(arr4));

// Iterate over an array
const arr5 = [2, 3, 4, 5, 6, 7];
for(let i = 0; i < arr5.length; i++) {
  console.log(arr5[i]);
}

function displayEachElement(element) {
  console.log(element);
}
arr5.forEach(displayEachElement) // takes a callback

arr5.forEach(input => console.log(input)) // takes a callback

// callback function
function log1() {
    console.log("hello world 1")
}

function log2() {
    console.log("hello world 2")
}

function logWhatsPresent(fn) {
    fn();
}

logWhatsPresent(log2)

