/*
 1. Union Types: 
    - Allows a variable to hold values of multiple types.
    NB: TypeScript will only allow you to access properties and methods that are common to both types unless you perform type gurads or type assertion.

 2. Type Guards: 
    - Type guards are used to narrow down the type of a variable within a conditional block.
    - They enesure a variable is of certain type within a specific scope. This restores access to properties and methods associated with a particular type.
    - Common type guards include:
        a. typeof operator: primitive types (strings, iontegers, boolean and symbols)
        b. instanceof operator: checking if an object is an instance of a specific class
        c. in operator: checking if a propertu exist in an object
*/

function printLength(value: string | number) {
    if(typeof value === 'string') {
        console.log(value.length);
    } else {
        console.log("Not a string")
    }
}

