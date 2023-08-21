// -- Birkaç cümleden oluşan bir hikaye yazıp myStory isimli bir değişkene atayalım. İçerisinde tekrar eden birkaç kelime bulunsun.
            // 0123456789                                                    -2-1
let myStory = "İşim olmaz benden de güzeli yok. Bu bakımdan benden çok üzeni yok."
console.log(myStory);
// 1- Yazdığınız hikayenin uzunluğunu yazdırın.
console.log(myStory.length);
// 2- Hikayenin toplam index sayısı kaçtır.
console.log(myStory.length - 1);
// 3- string içerisinde tekrar eden bir kelimenin ilkinin indexini ve sonuncusunun indexini sorgulayın.
console.log(myStory.indexOf("yok"));
console.log(myStory.lastIndexOf("yok"));
// 4- İlk 15 karakterini yazdırın. ( 2 farklı yöntem kullanarak)
console.log(myStory.substring(0,15));
console.log(myStory.slice(0,15));
// 5- 15. karakterden sonrasını yazdırın. ( 2 farklı yöntem kullanarak)
console.log(myStory.substring(15));
console.log(myStory.slice(15, 30));
// 6- Son 5 karakteri yazdırın. ( 2 farklı yöntem kullanarak)
console.log(myStory.substring(myStory.length - 5));
console.log(myStory.slice(-5 , -2));
// 7- 11. karakterden sonra gelen 10 karakteri yazdırın.
console.log(myStory.substring(12,22));
console.log(myStory.substring(12,(12+10)));
// console.log(myStory.substr(12,10));
// 8- Son 5 karakter haric hikayenizi yazdırın.
console.log(myStory.substring(0, myStory.length - 5));
console.log(myStory.slice(0, -5));
// 9- Hikayeniz, seçeceğiniz bir kelimeyi içeriyor mu diye kontrol edin.
console.log(myStory.includes("yok"));
console.log(myStory.includes("var"));
// 10- Hikayenizdeki tüm "i" karakterlerini "ı" ya çevirin.
console.log(myStory.replaceAll("i" , "ı"));
// 11- Hikayenizdeki "a" karakterini "e" ye çevirin.
console.log(myStory.replace("a", "e"));
// 12- Bütün metni büyük harfe çevirin.
console.log(myStory.toUpperCase());
// 13- Bütün metni küçük harfe çevirin.
console.log(myStory.toLowerCase());
// -----------------------------------------------
// 14- prompt üzerinden kullancıdan bir isim isteyin ve bir değişkene atayın.
let isim = prompt("İsminizi giriniz.")
//   a- Ardından bu değişkeni kullanarak console'a "Hoşgeldin, isim" şeklinde yazdırın.
console.log("Hoşgeldin: "+ isim);
//   b- Yukarıdaki çıktının aynısını template litteral kullanarak konsola yazdırın. Örn: console.log(degisken) => "benim adım: Cem"  
console.log(`Hoşgeldin: ${isim}`);
// 15- Kullanıcıdan gelen stringin başına ve sonuna boşluk koyun. 
//   a- Başındaki boşlukları kaldırın.
console.log(isim.trimStart());
//   b- Sonundaki boşlukları kaldırın.
console.log(isim.trimEnd());
//   c- Boşluksuz halini yeni bir değişkene atayarak konsola yazdırın.
let trimmedName = isim.trim()
console.log(trimmedName);
// 16- Çıktıyı uygun metotları kullanarak "BENİM Adım: İsim" yazacak hale getirin.
let trimmedVariable = "benim adım:"
console.log("BENİM Adım: " + trimmedName);
console.log(trimmedVariable.substring(0,7).toUpperCase() + trimmedVariable.substring(7) + " " + trimmedName.toLowerCase().slice(0,1).toUpperCase() + trimmedName.toLowerCase().substring(1));
// 17- Ekrana tırnak içindeki mesajı ya da değişkendeki değeri yazdıran bir pop-up oluşturun.
alert("Ara vakti!")