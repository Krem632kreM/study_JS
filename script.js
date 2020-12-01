'use strict'

let arr = ["254","25","58","654","48","55654","1"];

  for (let i=0; i<7; i++) {

    if (arr[i][0] === '2' || arr[i][0] === '4') {
        console.log(arr[i]);
    }
  }

  var array = [];
  for (let i = 1; i <= 100; i++) {
      for (let j = 1; j <= i; j++) {
          if (i % j === 0) {
              array.push(j);
          }
      } if (array.length<=2) { 
            console.log("Число " + i + " простое. Его делители: " + array.join(' и '));
        }
        
        array=[];
  }

