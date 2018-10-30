# Number Replacer

#### By Paige Williams, October 26th 2018

## Description

_This is an excercise in JavaScript arrays and looping. The application inputs a number from the user and once submitted, returns a list of numbers up to the number inputted. However, numbers that contain the digit 0 and 1 are replaced with the words "Beep" and "Boop." Additionally, numbers that are divisible by three are replaced with the phrase, "I'm sorry Dave, I'm afraid I can't do that."_

## Setup/Installation Requirements

* Log in to GitHub
* Clone GitHub URL in terminal
* Open the html file in your Web Browser
* Open file in Atom

## Technologies Used
 * GitHub, HTML, CSS, Bootstrap, Javascript, JQuery

## Objectives

- [x] JavaScript business logic and user interface logic are separate.

- [x] Variable names are descriptive and use lower camel case (e.g. myVariableExample).

- [x] Code is clean, well-refactored, and easy-to-read. This includes correct indentation, spacing, and including only necessary comments and debugging tools.

- [x] All previous objectives have been met.

- [x] Logic is broken down into "plain English" specs, listed in README.

- [x] Project is in a presentable, portfolio-quality state.

- [x] Required functionality is in place by Friday deadline.

- [x] Project demonstrates understanding of this week's concepts. If prompted, you are able to discuss your code with an instructor using correct terminology.

- [x] Application implements a loop and works as expected.

## Specifications

1. It should take a number from the user and return a range of numbers with the exception of if a number contains 0, it is replaced with the word, "Beep!"
    - Example Input: 6
    - Example Output: "Beep", 1, 2, 3, 4, 5, 6
2. It should take a number from the user and return a range of numbers with the exception of if a number contains 1, it is replaced with the word, "Boop!"
    - Example Input: 6
    - Example Output: "Beep", "Boop", 2, 3, 4, 5, 6
3. It should take a number from the user and return a range of numbers with the exception of if it divisible by three, it is replaced with the phrase, "I'm sorry Dave, I'm afraid I can't do that."
    - Example Input: 6
    - Example Output: "Beep", "Boop", 2, "I'm sorry Dave, I'm afraid I can't do that.", 4, 5, "I'm sorry Dave, I'm afraid I can't do that."
4. It should replace numbers with the most important exception, with ability to be divisible by 3 the most important and containing 0 the least important.
    - Example Input: 30
    - Example Output: "Beep", "Boop", 2, "I'm sorry Dave, I'm afraid I can't do that.",..."I'm sorry Dave, I'm afraid I can't do that."
5. It should be able to run multiple times and return new results over and over again.

### License
Copyright (c) 2018 MIT license.
