/*
На складах, порядок. Роботы стоят без работы. Проведем инвентаризацию?
Нужно научить роботов различать коробки и считать их количество.
Коробки представлены в виде строки aaabcda, где каждый символ, это коробка соответствующего типа.
Создай функцию countBoxes, которая будет принимать строку коробок boxes и возвращать объект с количеством соответствующих коробок.

Пример:

countBoxes('aabca') === {a: 3, b: 1, c: 1}
countBoxes('aaaaca31') === {a: 5, c: 1, 3: 1, 1: 1}
countBoxes('') === {}
*/

function countBoxes(boxes) {

    // write code here
    let arr = boxes.split(""); //  ["a", "a", "b", "c", "a"]
    const obj;
  
    arr.forEach(item => obj[item] = (obj[item] || 0 ) + 1);
    // The expression counts[x] || 0 returns the value of counts[x] if it is set, otherwise 0
    return obj;
}

  countBoxes('aabca') //=== {a: 3, b: 1, c: 1}
  countBoxes('aaaaca31')// === {a: 5, c: 1, 3: 1, 1: 1}
  countBoxes('') //=== {}