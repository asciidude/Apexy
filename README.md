# Apexy

## What is Apexy?
Apexy is a programming language that transpiles to JavaScript, by default Apexy will look for `main.apex` and run it. In the current version, there is no way to change this and it must be in the root directory. I hope to change this soon.

## Why use Apexy?
As of right now, there is no other reason to use it other than nice syntax.

## Documentation
Whitespace, newlines, and comments will be transpiled\

### Ignored
`>> text here` Comment: ignored text when compiled, used for annotations and explinations\

### Built-in Functions
**Arrays**\
`each(arr, callback(element))` Run a forEach function through every element in the array, and provide the element(s) in the callback function\
`join(arr, join_str)` Join an array with the join string, then return the joined array\
`push(arr, content)` Push content to an array\
`split(arr, seperator)` Split an array with a seperator

### Symbols
`[]` Array classifier: creates a list of values, for example: `[1, "two", 3]`\
`()` Paremeters classifier: creates a list of parameters\
`{}` Code block: creates a code block, most used for function bodies and objects\
`,` Splitter: split things in lists or arrays\

### Math
```
+
++
-
--
/
*
>
<
=
```

### Statements
`print` Print output to the console\
`fn` Create a function\
`while` Start a while loop\
`return` Return a value\
`break` Break out of something\
`true/false` Boolean statements

### Arrows
Arrows are a little different in Apexy, this language supports both the fat arrow (`=>`) and thin arrow (`->`), in which they act the same way

### Variables
To create new variables, use the `set` keyword, to assign something to a variable, just call the variable by it's name

### Semi-colons
Semi-colons are optional in this language