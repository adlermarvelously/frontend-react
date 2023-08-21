const myCar = {
  marka: "Seat",
  model: "Leon",
  yil: 2014,
  renk: "kirmizi",
  yakitTuru: "dizel",
  motoruCalistir: function () {
    console.log(`${this.marka} motoru çalıştırıldı.`);
  },
  hareketEt: () => {
    console.log("Hareket etti.");
  },
  getArabaninOzellikleri: function () {
    console.log(
      `${this.marka} ${this.model} ${this.renk} renginde bir arabam var.`
    );
  },
};

myCar.getArabaninOzellikleri();
myCar.hareketEt();

console.log(myCar.renk);
console.log(myCar["renk"]);

// object vs array
const obj1 = { isim: "Damla", soyisim: "Erismis" };
const obj2 = { isim: "Damla", soyisim: "Erismis" };
const obj3 = { isim: "Kerem", soyisim: "Turak" };
const obj4 = obj1;
console.log("obj1 ? obj2", JSON.stringify(obj1) === JSON.stringify(obj2));
console.log("obj1 ? obj3", obj1 === obj3);
console.log("obj1 ? obj4", obj1 === obj4);
// object'e property ekleme
obj4.yas = 30;
obj4["yas"] = 30;
console.log(obj1);

const arr1 = [1, 2, 3];
const arr2 = [1, 2, 3];
const arr3 = [3, 4, 5];
const arr4 = arr1;
console.log("arr1 ? arr2", JSON.stringify(arr1) === JSON.stringify(arr2));
console.log("arr1 ? arr3", arr1 === arr3);
console.log("arr1 ? arr4", arr1 === arr4);
arr4.push(4);
console.log(arr1);

function compareObj(obj1, obj2) {
  return obj1.isim === obj2.isim && obj1["soyisim"] === obj2["soyisim"];
}

console.log("obj1 ? obj2", compareObj(obj1, obj2));

// hasOwnProperty
if (myCar.hasOwnProperty("yakitTuru")) {
  console.log(myCar.yakitTuru);
}

// entries
// array döner
console.log(Object.entries(myCar)); // [["marka","Seat"],["model","Leon"],...]

// for (const objArr of Object.entries(myCar)) {
//   const key = objArr[0];
//   const value = objArr[1];
//   console.log(`${key}: ${value}`);
// }
// const [key, value] destructuring yapıldı.
for (const [key, value] of Object.entries(myCar)) {
  console.log(`${key}: ${value}`);
}

// keys
// array döner
console.log(Object.keys(myCar));

for (const key of Object.keys(myCar)) {
  console.log(myCar[key]);
}

// values
// array döner
console.log(Object.values(myCar));

for (const value of Object.values(myCar)) {
  console.log(value);
}

// freeze
// Object.freeze(myCar);
// myCar.prop1 = "prop1"; // yeni property eklenemez.
// myCar.marka = "VW"; // var olan key'in value'su değiştirilemez.
// delete myCar.marka;
// console.log(myCar);

// seal
// Object.seal(myCar);
// myCar.prop1 = "prop1"; // yeni property eklenemez.
// myCar.marka = "VW"; // var olan key'in value'su değiştirilebilir.
// delete myCar.marka; // property çıkartılamaz.
// console.log(myCar);

// Object.freeze(obj1);
// const objects = [obj1, obj2, obj3, obj4];
// for (const iterator of objects) {
//   iterator.isim = "Muhittin";
// }

// console.log(objects);

// forin
for (const key in myCar) {
  console.log(`${key}: ${myCar[key]}`);
}

//assign
const damla = { isim: "Damla", soyisim: "Erismis" };
const fakeDamla = { soyisim: "Erismisoglu", cinsiyet: "K" };
console.log("damla", damla);
console.log("fakeDamla", fakeDamla);
const newObj = Object.assign(damla, fakeDamla);
damla.yas = 30;
console.log("damla", damla);
console.log("fakeDamla", fakeDamla);
console.log("newObj", newObj);
console.log("damla ? newBbj", damla === newObj);
