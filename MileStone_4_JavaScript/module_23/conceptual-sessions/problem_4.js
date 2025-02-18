function dawatList(relativeList) {
  let totalManList = [];

  for (const relative of relativeList) {
    let isUnique = true;
    for (const list of totalManList) {
      if (relative.name === list.name && relative.member === list.member) {
        isUnique = false;
        break;
      }
    }
    if (isUnique) {
      totalManList.push(relative);
    }
  }
  console.log(totalManList);
}


const relatives = [
  { name: "Alice", member: 1 },
  { name: "Bob", member: 2 },
  { name: "Charlie", member: 3 },
  { name: "Alice", member: 1 },
  { name: "David", member: 4 },
  { name: "Eve", member: 5 },
  { name: "Bob", member: 2 },
  { name: "Frank", member: 6 },
  { name: "Grace", member: 7 },
  { name: "Alice", member: 1 },
];

dawatList(relatives);
