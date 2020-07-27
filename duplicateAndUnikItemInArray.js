/*функцию duplicates, которая буде возвращать все не уникальные значения из массива items.

    Пример:

    duplicates([1, 2, 3, 3, 4, 5, 1, 6]) === [1, 3]
    duplicates(['last', 'ball', 'game', 'last', 'game']) === ['last', 'game']
    */
   function duplicates(array){
    let buffer = []; // array of unique elemnt
    let result = []; // array of duplicate element
    for (let i = 0; i < array.length; i++) {
        if (buffer.indexOf(array[i]) === -1) {
            buffer.push(array[i]);
        } else {
            if (result.indexOf(array[i]) === -1) {
                result.push(array[i]);  
            } else {
            buffer.push(array[i]); 
        }
        }
    }
    return `result = ${result}, buffer = ${buffer}`;

    /* 2nd METHOD  **************2nd METHOD*********
     ****************2nd METHOD**************************/
    
    // let map = {};
    // let result = [];
    // for(let char of array){
    //     if(!map[char]){
    //         map[char] = 1;
    //     } else {
    //         map[char]++;
    //     }
    // }

    // for(let char in map){
    //     if(map[char] >=2){
    //         if(isNaN(char) || char === "" || char === " "){
    //             result.push(char);
    //         } else {
    //             result.push(parseInt(char));
    //         }
    //     }
    // }

    // return result;
}
  
console.log(duplicates([0,0,0,0,0,0])); // === [0]
console.log(duplicates([1, 2, 3, 3, 4, 5, 1, 6]));// === [1, 3]
console.log(duplicates(['last', 'ball', 'game', 'last', 'game']));// === ['last', 'game']
    