let loremIpsum = "Lorem ipsum dolor sit amet, posse eripuit laoreet in eum";

// length
console.log("length:", loremIpsum.length);

// slice
const sliceString = loremIpsum.slice(6, 11);
console.log("slice:", sliceString);

// substring
const substring1 = loremIpsum.substring(6, 11);
const substring2 = loremIpsum.substring(6);
console.log("substring1:", substring1);
console.log("substring2:", substring2);

// substr
const substrUsage = loremIpsum.substr(6, 5);
console.log(substrUsage);

// toUpperCase
const toUpperCaseString = loremIpsum.toUpperCase();
console.log("toUpperCaseString:", toUpperCaseString);

// toLowerCase
const toLowerCaseString = loremIpsum.toLowerCase();
console.log("toLowerCaseString:", toLowerCaseString);

// includes
if (loremIpsum.toLowerCase().includes("lorem")) {
  console.log("lorem kelimesi loremIpsum variable'ında mevcut.");
}

// trim
const loremIpsumWithWhiteSpace = "       Lorem ipsum     ";
console.log("trim:", loremIpsumWithWhiteSpace.trim());
// trimStart
const trimStartUsage = loremIpsumWithWhiteSpace.trimStart();
console.log("trimStart:", trimStartUsage);
// trimEnd
const trimEndUsage = loremIpsumWithWhiteSpace.trimEnd();
console.log("trimEnd:", trimEndUsage);

// replace
const replaceUsage = "I am using Twitter";
console.log("replace:", replaceUsage.replace("Twitter", "Threads"));

// split
const splitUsage = "I am using Threads";
console.log("split:", splitUsage.split(" "));

const ids = "id1,id2,id3";
console.log("split", ids.split(","));

// indexOf, lastIndexOf
const indexOfUsage = "Lorem ipsum dolor sit ipsum amet";
console.log("indexof:", indexOfUsage.indexOf("ipsum"));
console.log("lastIndexOf:", indexOfUsage.lastIndexOf("ipsum"));
console.log("indexof e:", indexOfUsage.indexOf("e"));
console.log("lastIndexOf e:", indexOfUsage.lastIndexOf("e"));
console.log("indexof e:", indexOfUsage.indexOf("e", 10));

// String Template Literal
let stringTemplateLiteral = `Split: ${splitUsage}, Ids: ${ids}`;
// stringTemplateLiteral = "Split: " + splitUsage + ", Ids: " + ids;
// concat
stringTemplateLiteral = "Split: "
  .concat(splitUsage)
  .concat(", Ids: ")
  .concat(ids);
console.log(stringTemplateLiteral);
