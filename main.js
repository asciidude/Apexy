// Transpiled using Apexy | https://github.com/asciidude/Apexy
// If there are any issues, make an issue on GitHub
'use strict'

import {each,split,concat,push,join} from './built-in/require.js';

// Create a program that says "Hello, world!"
console.log("Hello, world!");

// Now, print every classmate in the split string
let classmates = split("John Jerry Jordan Jack Jeffery", " ");

each(classmates, (peep) => {
    console.log("Classmate #" + peep + ": " + classmates[peep]);
});

// Now, until i > 5, add i to i_arr, then print i_arr once the while loop is done
let i = 0;
let i_arr = [];

while (true) {
    push(i_arr, i);

    if(i > 4) {
        break;
    }

    i++;
}

console.log(join(i_arr, " "));

// Create a class with a showRoot() function
class NewClass {
    constructor(name) {
        this.name = name;
    }

    showRoot() {
        console.log("FROM showRoot() IN NewClass");
    }
}

let newClass = new NewClass("sus");
newClass.showRoot();