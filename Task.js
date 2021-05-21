// Написать ф-цию, которая принимает объект и меняет местами ключи и значения
// function convertObject(obj) {}
// convertObject({ a: "b", c: "d" }); // => { b: 'a', d: 'c' }

function convertObject(obj) {
    for (let key in obj) {
        let oldValue = obj[key]; 
        let newValue = key; 
        obj[oldValue] = newValue;
        delete obj[key];
    }
    return obj;
}
let obj = {
    a: 'b',
    c: 'd'
}
console.log(obj);
console.log (convertObject(obj))


// // - Написать ф-цию, которая принимает объект, где в качестве значений - числа
// - Ф-ция должна проверить, есть ли среди значений четные числа и вернуть true/false
// function isEvenValue(obj) {}
// isEvenValue({ x: 1, y: 2 }); // => true
// isEvenValue({ x: 1, y: 1 }); // => false

function isEvenValue(objNum) {
    for (let key in objNum) {
      if (objNum[key] % 2 == 0) {
        return true;
      }
    }
    return false
  }
  let objNum = {
      x: 1,
      y: 2,
      z: 3,
      k: 'asdas',
      o: true
  }
  console.log (isEvenValue(objNum))