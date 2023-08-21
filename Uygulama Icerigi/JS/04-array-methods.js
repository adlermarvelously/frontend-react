// 1- myArray isimli bir dizi tanımlayın. 10 elemandan oluşsun ad soyad yaş true sevdiğiniz meyveler, sevdiğiniz yemekler  
let myArray = ["Cem", "Şimşek", 29, true, "erik", "çilek", "karpuz", "kivi", "kebap", "çorba"]
console.log(myArray);
// 2- adınızı değiştirin => Cem => Mert. Diziyi konsola yazdırın.
myArray[0] = "Mert"
console.log(myArray);
// 3- dizinin uzunluğunu konsola yazdırın.
console.log(myArray.length);
// 4- dizinin sonuna bir hayvan ismi ekleyin. yeni uzunluk bilgisini bir değişkene atayın(.length kullanmadan), konsola yazdırın.
let pushedLenght = myArray.push("kedi")
console.log(pushedLenght);
// 5- dizinin başına bir hayvan ekleyin. yeni uzunluk bilgisini bir değişkene atayın(.length kullanmadan), konsola yazdırın.
let unshiftedLenght = myArray.unshift("köpek")
console.log(unshiftedLenght);
// 6- dizinin sonundaki elemanı silin. silinen elemanı bir değişkene atayın, konsola yazdırın.
let poppedItem = myArray.pop()
console.log(poppedItem);
// 7- dizinin ilk elemanını silin. silinen elemanı bir değişkene atayın, konsola yazdırın.
let shifedItem = myArray.shift()
console.log(shifedItem);
// 8- silmiş olduğunuz elemanları ve uzunluk bilgilerini newArray isimli yeni bir dizide toplayın.(sakladığınız değişkenleri kullanın)
const newArray = [pushedLenght, unshiftedLenght, poppedItem, shifedItem]
console.log(newArray);
// 9- myArray ve newArray dizilerini birleştirin ve yeni değişkenlere atayın. 2 yöntem.
const thirdArray = myArray.concat(newArray)
console.log(thirdArray);
const spreadedArray = [...myArray, ...newArray]
console.log(spreadedArray);
// 10- myArray içerisinde eleman olarak "Veli" var mı ?
console.log(myArray.includes("Veli"));
// 11- myArray içersinide 4.elemandan itibaren patates var mı?
console.log(myArray.includes("patates", 3));
console.log(myArray.includes("kivi", 1));
// 12- sevdiğiniz meyvelerden ilkinin indexi nedir?
console.log(myArray.indexOf("erik"));
console.log(myArray.indexOf("erik1"));
// 13- newArray dizisinin ilk 3 elemanını bir değişkene atayın, konsola yazdırın.
const slicedArray = newArray.slice(0,3)
console.log(slicedArray);
// 14- son oluşturduğunuz 3 elemanlı dizinin 2. elemanını silip yerine 2 farklı eleman ekleyin.
console.log(slicedArray.splice(1,1, "Anıl", "Murat"));
console.log(slicedArray);
// 15- son diziniz 4 elemanlı olmuş olmalı. tek metot ile 1 eleman silin 1 eleman değiştirin ve bir eleman ekleyin
slicedArray.splice(1,2,"Kerem", "Burak")
console.log(slicedArray);
// 16- son dizinizin elemanlarını aralarına "+" koyarak bir stringe çevirin ve konsola yazdırın.
console.log(slicedArray.join(" + "));