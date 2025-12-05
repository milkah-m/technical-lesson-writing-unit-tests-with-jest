//Your tests here

import { pointsForWord } from "../utils";

//describe is the grandparent function that takes the string of the function being tested and an anonymous function of a specific test as a parameter
describe ("pointsForWord", () => {
//it is the parent function that describes one specific test and takes the string description of said test as parameter and the actual code for the test as the second parameter
it("calculates the total points for a word (1 point for vowels, 2 for consonants)", ()=> {

//here i am defining the test value as the word test
const word = "test";

//here i am passing my newly created variable as an argument to the pointsForWord function and storing it as a variable called points
const points = pointsForWord(word);

expect(points).toBe(7); });
});


