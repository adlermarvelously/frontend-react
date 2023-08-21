const hivda = {
  name: "Hivda",
  surname: "Aydogan",
  date: 1998,
  town: "Ankara",
  getInfo: function () {
    console.log(`İsmi ${this.name} olan kişinin doğum tarihi ${this.date}.`);
  },
};

// Normal function'larda this bulunduğu method'un ya da class'ın özelliklerini taşır.
// Normal function'lar immutable oldukları için kodun  istenilen yerinde çağırılabilir.
function getHivdasInfo() {
  for (const key in hivda) {
    const value = hivda[key];
    console.log(`${key.toUpperCase()}: ${value}`);
  }
}

// Arrow function ES6 ile geldi.
// this objesi bulunduğu method'un ya da class'ın özellikleri taşımaz.
// Arrow function'lar immutable oldukları için fonksiyon yazıldığı yerin altında çağırılmalıdır.
const printDescription = () => {
  console.log("Hivda'nın özellikleri aşağıda yer alıyor.");
};

const getHivdasLife = function () {
  printDescription();
  getHivdasInfo();
};

// getHivdasLife();

const getHivdasDate = () => {
  return hivda.date; // hivda["date"]
};

// console.log(getHivdasDate());

hivda.getInfo();
