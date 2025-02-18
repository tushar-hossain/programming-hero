function proposalMessage(hero, hena) {
  if (
    typeof hero !== "object" ||
    typeof hena !== "object" ||
    !Array.isArray(hero) ||
    !Array.isArray(hena) ||
    hero !== null ||
    hena !== null
  ) {
  }

  if (hero.district === hena.district) {
    return "Proposal done.";
  } else {
    return "Nooooooo";
  }
}

const heroBioData = {
  name: "hero",
  age: 20,
  district: "dhaka",
  fatherName: "alom khan",
};

const henaBioData = {
  name: "hena",
  age: 20,
  district: "dhaka",
  fatherName: "shakil khan",
};

const result = proposalMessage(heroBioData, henaBioData);
console.log(result);
