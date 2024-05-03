"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Sorter_1 = require("./Sorter");
const CharactersCollection_1 = require("./CharactersCollection");
const LinkedList_1 = require("./LinkedList");
// const numbersCollection = new NumbersCollection([100, 3, -5, 0, -1, 43, 122])
// const sorter = new Sorter(numbersCollection);
// sorter.sort();
// console.log(numbersCollection.data );
const charactersCollection = new CharactersCollection_1.CharactersCollection('OIUYTRWfcvbknjnbvarwthyjuk');
const sorter = new Sorter_1.Sorter(charactersCollection);
sorter.sort();
console.log(charactersCollection);
const linkedList = new LinkedList_1.LinkedList();
linkedList.add(30);
linkedList.add(60);
linkedList.add(40);
linkedList.add(45);
console.log(linkedList.length);
console.log(linkedList.at(3));
console.log('Finished');
/*
- The sorter class need to be generic so that it can different types of collections: array of numbers, string of characters, list
- But the way the different types of collections are compared and swapped is different
- We could use union types and type guards for this but this approach is not scalable - Everytime we have a another type of a collection we have to add if statement in the sort method to handle the new type
- So we need to extract the compare and swap logic to the individual classes of these collections e.g NumbersCollection, StringSollection, LinkedList. Each coolection has its compare and swap methods
- Also we make the Sorter class such that it accept these different types of collections. This can be done using an interface that requires a collection to have length property and compare and sawp methods for it to be sorted
*/
