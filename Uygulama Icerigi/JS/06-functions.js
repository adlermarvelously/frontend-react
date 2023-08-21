// Yazacağınız fonksiyonlar içerisinde console.log ifadesi yer almayacak.
// 1- Verilen iki sayının çarpımını döndüren bir fonksiyon yazın. (Arrow Function ile)
const carpma = (sayi1, sayi2) => sayi1 * sayi2;

console.log(carpma(3, 5));

// 2- Verilen bir cümlenin kelime sayısını döndüren bir arrow fonksiyon yazın.
let sentence = "Merhaba benim adım Cem";

const kelimeSayisiniBul = (cumle) => cumle.split(" ").length;
console.log(kelimeSayisiniBul(sentence));
// 3- Verilen bir sayının faktöriyelini hesaplayan bir fonksiyon yazın. (Function Declaration Yöntemi ile)

function faktoriyel(sayi) {
  let sonuc = 1;
  for (let i = 2; i <= sayi; i++) {
    sonuc *= i;
  }
  return sonuc;
}

console.log(faktoriyel(5));
// 4- Verilen bir sayının asal olup olmadığını kontrol eden bir fonksiyon yazın. (Function Expression Yöntemi ile)
const asalSayilar = function (sayi){
    if (sayi < 2){
        return false
    }
    for(let i = 2; i <= Math.ceil(Math.sqrt(sayi)); i++){
        if ( sayi % i === 0){
            return false 
        }
    }
    return true
}
// 5- Verilen bir dizi içindeki en büyük sayıyı bulan bir fonksiyon yazın.
const myArr = [5,1,24,8,10]
const enBuyukSayi = function ( dizi){
    let enBuyuk = dizi[0]
    for(let i = 1; i < dizi.length; i++){
        if(dizi[i] > enBuyuk){
            enBuyuk = dizi[i]
        }
    }
    return enBuyuk
}

console.log(enBuyukSayi(myArr));
// 6- Verilen bir dizi içindeki sayıların toplamını hesaplayan bir fonksiyon yazın.
const diziTopla = function ( dizi ){
    let toplam = 0;
    for(let i = 0; i < dizi.length; i++){
        toplam += dizi[i]
    }
    return toplam
}

console.log(diziTopla(myArr));
// 7-Yukarıdaki son iki fonksiyonu arrow function olarak yeniden yazın.
const enBuyukSayiArrow = (dizi) => {
    let enBuyuk = dizi[0]
    for(let i = 1; i < dizi.length; i++){
        if(dizi[i] > enBuyuk){
            enBuyuk = dizi[i]
        }
    }
    return enBuyuk
}

const diziToplaArrow = (dizi) => {
    let toplam = 0;
    for (let i = 0; i < dizi.length; i++) {
        toplam += dizi[i];
    }
    return toplam;
}

// Buradan itibaren yalnızca arrow function kullanıyoruz.
// 8- Verilen bir stringi tersine çeviren bir fonksiyon yazın.
const tersCevir = (string) => {
    let tersString = ""
    for (let i = string.length -1; i >= 0; i-- ){
        tersString += string [i]
    }

    return tersString
}
console.log(tersCevir(sentence));
// 9- Verilen bir dizinin elemanlarını rastgele karıştıran bir fonksiyon yazın. (Kopya çekmek yok. Mantık kurmaya çalışın)
const diziKaristir = (dizi) => {
    let j ;
    for( let i = dizi.length -1 ; i > 0; i--){
         j = Math.floor(Math.random() * (i + 1));
        [dizi[i], dizi[j]] = [dizi[j], dizi[i]]
    }
    return dizi
}
console.log(diziKaristir([1,2,3,4,5]));
// 10- Verilen bir sayının pozitif bölenlerini bulan bir fonksiyon yazın.(örn. 12'nin pozitif bölenleri 1,2,3,4,6,12)
const pozitifBolenler = (sayi) => {
    const bolenler = []
    for (let i = 1; i <= sayi; i++){
        if ( sayi % i === 0){
            bolenler.push(i)
        }
    }
    return bolenler
}

console.log(pozitifBolenler(17));
// 11- Verilen bir stringin içinde belirli bir karakterin kaç kez tekrarlandığını hesaplayan bir fonksiyon yazın.
const karakterSayisi = (string, karakter) => {
    let sayac = 0;
    for (let i = 0; i < string.length; i++){
        if(string[i] === karakter){
            sayac++
        }
    }
    return sayac
}
console.log(karakterSayisi("Merhaba benim adım Cem", "c"))

// 12 - içerisine kaç adet sayı yazılırsa yazılsın, sayıların toplamını döndüren bir fonksiyon yazınız.

const topla = (...args) => {
    let toplam = 0;
    console.log(args);
    for(let i = 0; i < args.length; i++){
        toplam += args[i]
    }
    return toplam
}

console.log(topla(5,6))
console.log(topla(5,6,7,8,9))