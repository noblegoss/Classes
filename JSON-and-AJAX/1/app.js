// var thePets = [
//     {
//       "name": "Meowsy",
//       "species" : "cat",
//       "foods": {
//         "likes": ["tuna", "catnip"],
//         "dislikes": ["ham", "zucchini"]
//       }
//     },
//     {
//       "name": "Barky",
//       "species" : "dog",
//       "foods": {
//         "likes": ["bones", "carrots"],
//         "dislikes": ["tuna"]
//       }
//     },
//     {
//       "name": "Purrpaws",
//       "species" : "cat",
//       "foods": {
//         "likes": ["mice"],
//         "dislikes": ["cookies"]
//       }
//     }
//   ];
  // this's an example of JSON 
// JavaScript Object Notation = JSON
/** in the real world u'll problably need to load JSON from a dynamic
 source, like another URL that's power by a database
 */
let btn = document.getElementById('btn');
let animalContainer = document.getElementById('output');
let pageCounter = 1;


btn.addEventListener('click', function(){
    

    let ourRequest = new XMLHttpRequest();
    ourRequest.open('GET', 'https://learnwebcode.github.io/json-example/animals-' + pageCounter +'.json');
    ourRequest.onload = function(){
        // let ourData = ourRequest.responseText;
        // console.log(ourData[0]) // result is '[', bcz the browser sees ourData as a big text string;
        if(ourRequest.status >= 200 && ourRequest.status < 400){

            let ourData = JSON.parse(ourRequest.responseText);
            renderHTML(ourData);
        }
        
    };

    ourRequest.onerror = function(){ // handeling connexion error
        alert('Connexion Error')
    };
    
    ourRequest.send();

    pageCounter++
    if(pageCounter > 3) btn.style.display = "none";
         
});

function renderHTML(param){
    let htmlString = "";
    for(i = 0; i< param.length; i++){
        htmlString += '<p>' + param[i].name + ' is a ' + param[i].species + ' that likes to eat ' ;
        
        for(ii = 0; ii< param[i].foods.likes.length; ii++){
            if(ii ==0){ // is the 1st elt of array
                htmlString += param[i].foods.likes[ii];
            }else {
                htmlString += ' and ' + param[i].foods.likes[ii];
            }
            
        }

        htmlString += '; and dislikes ';

        for(ii = 0; ii< param[i].foods.dislikes.length; ii++){
            if(ii ==0){ // is the 1st elt of array
                htmlString += param[i].foods.dislikes[ii];
            }else {
                htmlString += ' and ' + param[i].foods.dislikes[ii];
            }
            
        }
        htmlString += '.</p><br>';
    }
    
    animalContainer.insertAdjacentHTML('beforeend', htmlString);
    //animalContainer.innerHTML = htmlString;
}

// let ourRequest = new XMLHttpRequest();
// ourRequest.open('GET', 'https://learnwebcode.github.io/json-example/animals-1.json');
// ourRequest.onload = function(){
//     // let ourData = ourRequest.responseText;
//     // console.log(ourData[0]) // result is '[', bcz the browser sees ourData as a big text string;
//     let ourData = JSON.parse(ourRequest.responseText);
//     console.log(ourData[0])
// };
// ourRequest.send()

/** AJAX                 AJAJ
 * Asynchronous          Asynchronous (in the background or not requiering a page-refresh)
 * JavaScript            JavaScript
 * And                   And
 * XML                   JSON
 
 XML = a data format very similar to JSON, in ressent years JSON have replace XML as the most
 popular data format 
 */

