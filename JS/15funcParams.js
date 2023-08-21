// names default değeri olan bir parametredir.
// otherNames bir rest parametresi.
function getNames(names = [], ...otherNames) {
  if (names.length > 0) {
    for (const name of [...names, ...otherNames]) {
      console.log(name);
    }
  } else {
    console.log("Sinifta hiç öğrenci yok.");
  }
}

let sinif = ["Ayşe", "Yasin", "Sinem", "Damla", "Mehmet"];

getNames(sinif, "Kerem", "Mustafa", "Nurgül");
