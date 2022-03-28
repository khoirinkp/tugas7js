var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for(var i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}
console.log("");
for(let x of arr) {
    console.log(x);
}
// analisis
// for loop dan for of loop memiliki sama-sama fungsi yaitu menampilkan isi array
// for-of loop tidak memiliki key lagi, sedangkan for loop masih memiliki key