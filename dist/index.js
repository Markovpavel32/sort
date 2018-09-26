import bubbleSort from './src/bubbleSort';
let input = document.getElementsByTagName('input')[0]; // cath input
let numbersArr = []; // value of input => this massive
let arrayOfIndexes = []; //this massive catch changes of indexes in numbersArr then steps bubbleSort
input.addEventListener('input', function () {
    arrayOfIndexes = []; //new value => new start indexes
    //clear DOM tree if changes
    let parent = document.getElementsByClassName('parent')[0];
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
    //new value => new massive of values
    numbersArr = [];
    for (i = 0; i < input.value.length; i++) {
        numbersArr[i] = +input.value[i];
    }
    console.log(numbersArr); //test

    let div = []; // massive of bars
    //fills massive of bars
    for (i = 0; i < input.value.length; i++) {
        div[i] = document.createElement('div');
        parent.appendChild(div[i]);
        div[i].classList.add('bar');
        //give bars different heights
        let h = numbersArr[i] * 20;
        div[i].style.height = `${h}px`;
        //gives positions to bars
        div[i].style.left = `${i * 25}px`;
    }
    //fill massive of indexes
    for (i = 0; i < input.value.length; i++) {
        arrayOfIndexes[i] = i;
    }
});

console.log(numbersArr); //test for indexes
let step = document.getElementById('triangle_right'); //defines one step in bubbleSort
let arrayOfBars = document.getElementsByClassName('bar'); //massive of bars(**rework(make div global))
step.addEventListener('click', bubbleSort(input.value.length, numbersArr, arrayOfIndexes, arrayOfBars) /*function(){
                                                                                                       for(i = 0; i < input.value.length - 1; i++){
                                                                                                       for(j = 0; j < input.value.length - 1 - i; j++){
                                                                                                       if(numbersArr[j] > numbersArr[j+1]) {
                                                                                                       let b = numbersArr[j + 1];
                                                                                                       numbersArr[j + 1] = numbersArr[j];
                                                                                                       numbersArr[j] = b;
                                                                                                       let c = arrayOfBars[arrayOfIndexes[j]].style.left;
                                                                                                       arrayOfBars[arrayOfIndexes[j]].style.left = arrayOfBars[arrayOfIndexes[j+1]].style.left;
                                                                                                       arrayOfBars[arrayOfIndexes[j+1]].style.left = c;
                                                                                                       let d = arrayOfIndexes[j];
                                                                                                       arrayOfIndexes[j] = arrayOfIndexes[j+1];
                                                                                                       arrayOfIndexes[j + 1] = d;
                                                                                                       break;
                                                                                                       }
                                                                                                       }
                                                                                                       break;
                                                                                                       }
                                                                                                       console.log(numbersArr);
                                                                                                       console.log(arrayOfIndexes);
                                                                                                       }*/);