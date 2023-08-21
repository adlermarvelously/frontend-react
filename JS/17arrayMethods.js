const sinif = [
  "Ayşe",
  "Yasin",
  "Sinem",
  "Damla",
  "Mehmet",
  "Kerem",
  "Mustafa",
  "Nurgül",
];
const numbers = [49, 1, 52, 67, 33, 200, 120];

// --FOREACH
// foreach method'u içerideki elementleri göstermek istediğimizde veya
// o elementleri bir işlem dahilinde kullanmak istediğimizde kullanırız.

sinif.forEach((element, index, arr) => {
  //   console.log(index === 0 ? "ilk element" : arr[index]);
  //   console.log(`${element} sinifin ${index} index'li öğrencisidir.`);
});

sinif.forEach((element) => {
  //   console.log(element);
});

// --MAP
// var olan array'in (sinif) elemanları üzeerinde yaptığımız değişikliklerle yeni bir array
// yaratmamızı sağlar.
const yeniSinif = sinif.map((element, index, arr) => {
  return `${element} sinifin bir elemanidir.`;
});
// const yeniSinif = sinif.map((element) => `${element} sinifin bir elemanidir.`);
// console.log(yeniSinif);

// --FILTER
// var olan array'in istenilen kriterlere göre filtrelenip yeni bir array yartılmasını sağlar.
const filteredSinif = sinif.filter((element, index, arr) => {
  return element.length > 5;
});
// console.log(filteredSinif);

// const filteredNumber = numbers.filter((element) => {
//   return element > 50;
// });
const filteredNumber = numbers.filter((element) => element > 50);
// console.log(filteredNumber);

// --EVERY
// every method'u belirlenen kural tüm elementler için doğruysa true döner,
// bir elementte dahi kural geçerli değilse false döner.
const everyNumbers1 = numbers.every((element) => element > 0);
// console.log(everyNumbers1);
const everyNumbers2 = numbers.every((element) => element > 1);
// console.log(everyNumbers2);

// --SOME
// some method'u elemanlardan en az bir tanesinin kuralı sağlamasıyla true döner.
// hiçbir eleman kuralı sağlamazsa false döner.
const someNumbers1 = numbers.some((element) => {
  const isTrue = element > 50;
  return isTrue;
});
// console.log(someNumbers1);
const someNumbers2 = numbers.some((element) => {
  const isTrue = element > 300;
  return isTrue;
});
// console.log(someNumbers2);

// --FIND
// find method'u array'de belirlenen koşulu sağlayan ilk elemanı verir.
// numbers array'i içerisinde 50'den büyük olan ilk eleman nedir?
const higherThan50 = numbers.find((element) => element > 50);
// console.log(higherThan50);

// --FINDLAST
// findLast Method'u array içinde belirlenen koşulu sağlayan en son elemanı verir.
const higherThan50ForLast = numbers.findLast((element) => {
  const isTrue = element > 150;
  return isTrue;
});
// console.log(higherThan50ForLast);

// --FINDINDEX
// findIndex method'u array'de koşulu sağlayan ilk elemanın index'ini verir.
// number array'i içerisinde 50'den büyük olan ilk elemanın index'i nedir?
const higherThan50Index = numbers.findIndex((element) => element > 50);
// console.log(higherThan50Index);

// --FINDLASTINDEX
// findLastIndex method'u array içinde belirlenen koşulu sağlayan en son elemanın index'ini verir.
const higherThan50ForLastIndex = numbers.findLastIndex(
  (element) => element > 150
);
// console.log(higherThan50ForLastIndex);

// --SORT
// sort method'u verilen array'in belirlenen koşul ile sıralanmasını sağlar.
// ilgili array'i değiştirerek sıralanmış halini verir.
// numbers.sort((a, b) => a - b);
// console.log("numbers", numbers);
// console.log("sinif baslangic", sinif);
// sinif.sort();
// console.log("sinif", sinif);
// sinif.forEach((element) => console.log(element));

// --REVERSE
// reverse method'u verilen array'i tersten sıralar.
// console.log(numbers);
// numbers.reverse();
// console.log(numbers);
// console.log(sinif);
// sinif.reverse();
// console.log(sinif);

// --REDUCE
// reduce method'u genellikle number array'ler için işlemler yapılmak istendiğinde kullanlır.
// kullanılan array için return'de yapılan işlemin sonucunu bir sonraki döngüde parametre 
// olarak verir.
// Bu sayede array'ler içerisinde birleştirme işlemi yapılır ya da bir işlemin sonucuna ulaşılır.
const totalNumbers = numbers.reduce((total, element) => {
  return total + element;
});
console.log(totalNumbers);
const siniftakiKisiler = sinif.reduce((kisiler, element) => {
  return `${kisiler}, ${element}`;
});
// console.log(siniftakiKisiler);