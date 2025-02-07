// ### 4. Checking if it's an Array
// **Instructions:**
// 1. Create different variables, each containing either an array or a non-array value.
// 2. Now use isArray to check if each variable is an array.
// 3. Print a message to the console indicating whether each variable is an array or not.

const arr = [22, 45, 41, 23, 66, 99, 67, 85, 2];

const num = 50;

const str = "Name";

const checked = Array.isArray(arr);

const checked2 = Array.isArray(num);

const checked3 = Array.isArray(str);

console.log(checked, checked2, checked3);
