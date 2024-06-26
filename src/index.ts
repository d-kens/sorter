
import { NumbersCollection } from "./NumbersCollection";
import { CharactersCollection } from "./CharactersCollection";
import { LinkedList } from "./LinkedList";

const numbersCollection = new NumbersCollection([100, 3, -5, 0, -1, 43, 122])
numbersCollection.sort();
console.log(numbersCollection.data)

const charactersCollection = new CharactersCollection('OIUYTRWfcvbknjnbvarwthyjuk');
charactersCollection.sort();
console.log(charactersCollection);


const linkedList = new LinkedList();
linkedList.add(500);
linkedList.add(-10);
linkedList.add(-3);
linkedList.add(4);
linkedList.add(-100)

linkedList.sort()
linkedList.print()






/*
- The sorter class need to be generic so that it can different types of collections: array of numbers, string of characters, list 
- But the way the different types of collections are compared and swapped is different
- We could use union types and type guards for this but this approach is not scalable - Everytime we have a another type of a collection we have to add if statement in the sort method to handle the new type 
- So we need to extract the compare and swap logic to the individual classes of these collections e.g NumbersCollection, StringSollection, LinkedList. Each coolection has its compare and swap methods
- Also we make the Sorter class such that it accept these different types of collections. This can be done using an interface that requires a collection to have length property and compare and sawp methods for it to be sorted
*/





