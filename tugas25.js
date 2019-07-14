var angka = [2, 39, 76, 50, 9, 7, 41, 2, 24, 1, 16];
console.log("sebelumnya : " + angka);

var angka2 = angka.sort();
console.log("Ascending : " + angka2);

var angka3 = angka2.reverse();
console.log("Descending : " + angka3);

var hasil = angka3.filter(angka3 => {
  return angka3 > 15;
});

console.log("Filter > 10 : " + hasil);
