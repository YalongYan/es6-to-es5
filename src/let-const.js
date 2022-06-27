let arr1 = []
for (var i = 0; i < 10; i++) {
  arr1[i] = function () {
    console.log(i);
  };
}

console.log(arr2)

let arr2 = []
for (let i = 0; i < 10; i++) {
  arr2[i] = function () {
    console.log(i);
  };
}

console.log(arr2)