import {choice,remove} from "./helpers";
import fruits from "./fruits";

const fruit = choice(fruits);
console.log(`I’d like one ${fruit}, please.`)
console.log(`Here you go: ${fruit}`)
console.log("Delicious! May I have another?")
const newFruits = remove(fruits,fruit);
console.log(newFruits)
console.log(`I’m sorry, we’re all out. We have ${newFruits.length} left.`)
/*Randomly draw a fruit from the array

Log the message “Delicious! May I have another?”
Remove the fruit from the array of fruits
Log the message “I’m sorry, we’re all out. We have FRUITSLEFT left.”
*/
