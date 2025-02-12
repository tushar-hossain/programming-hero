/* 
### Task 4 (Hard)

Reverse the words of a sentence. Only the position of the word will be reversed. check out the output

`const statement = 'I am a hard working person'`
**Output:**
`'person working hard a am I'`
*/

const statement = "I am a hard working person";

let strArray = statement.split(" ");

let strOutput = "";

for (i = strArray.length - 1; i >= 0; i--) {
  strOutput += strArray[i] + " ";
}

console.log(strOutput);
