// variable
// camelCase
var dogName = "Karabas";

// boolean
// camelCase
var hasOwner = true; // false

// function
// camelCase
function getName() {
  console.log("Mehmet Arif");
}

// constant
// UPPER_SNAKE_CASE
const DAYS_UNTIL_TOMMORROW = 1;

// class
// PascalCase
class DogProps {
  constructor(dogName, ownerName) {
    this.dogName = dogName;
    this.ownerName = ownerName;
  }
}

// component
// PascalCase
function DogInfos(info = {}) {
  return "dogs";
  //   return (
  //     <div>
  //       <span>Dog Name: {info.dogName}</span>
  //       <span>Owner Name: {info.ownerName}</span>
  //     </div>
  //   );
}

class DogCartoon {
  constructor(dogName, ownerName) {
    this.dogName = dogName;
    this.ownerName = ownerName;
  }

  // method
  // camelCase
  getName() {
    return this.dogName;
  }

  // private
  // underscore
  _toonName(ownerName) {
    return ownerName;
  }
}

// file isimleri küçük harflerle aralarına tire koyularak veya camelCase ile yazılabilir.

console.log("It's working!");

// lower_snake_case
