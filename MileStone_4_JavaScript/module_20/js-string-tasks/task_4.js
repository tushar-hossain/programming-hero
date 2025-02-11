// ### Task-4:
// If a given string has either x, replace x by y. if the given string has X, replace it by Y.
// exercitationem, ex ea commodi consequatur?

let str = "Xt exercitationem";

let str2 = "";

for (i = 0; i < str.length; i++) {
  str2 += str[i].replace("x", "y").replace("X", "Y");
}

console.log(str2);
