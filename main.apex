>> Create a program that says "Hello, world!"
print("Hello, world!");

>> Now, print every classmate in the split string
set classmates = split("John Jerry Jordan Jack Jeffery", " ");

each(classmates, (peep) => {
    print("Classmate #" + peep + ": " + classmates[peep]);
});

>> Now, until i > 5, add i to i_arr, then print i_arr once the while loop is done
set i = 0;
set i_arr = [];

while (true) {
    push(i_arr, i);

    if(i > 4) {
        break;
    }

    i++;
}

print(join(i_arr, " "));