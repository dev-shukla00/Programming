// strings

let str1 = "no reservation";
let str2 = "joe black";
let str3 = "titanic";
// with variable name of string and .length you can see the length of a string

console.log("Length of str1: " + str1.length + "\n" +
    "Length of str2: " + str2.length + "\n" +
    "Length of str3: " + str3.length + "\n"
);

// Template Literals, these are simpler and standard method of using string
console.log(`Length of str1 : ${str1}`)

// Template literals ex 2: // it can also be used for multi line string variable
let specialString = `this is a
template literal
example`;

console.log(`${specialString}`);
