let input = document.getElementsByTagName('input')[0];// cath input
let numbersArr = [];// value of input => this massive
let index = [];//this massive cath changes of indexes in numbersArr then steps bubbleSort
input.addEventListener('input', function(){
    index=[];
    let parent = document.getElementsByClassName('parent')[0];
    
    while (parent.firstChild) {
         parent.removeChild(parent.firstChild);
    }
    
    numbersArr = [];
    
    for(i = 0; i < input.value.length; i++){
        numbersArr[i] = +input.value[i];
    }
    
    console.log(numbersArr)
    let div = [];
    for(i = 0; i < input.value.length; i++){
        div[i] = document.createElement('div');
        parent.appendChild(div[i]);
        div[i].classList.add('bar');
        let h = numbersArr[i] * 20;
        div[i].style.height = `${h}px`;
        div[i].style.left = `${i*25}px`;
        } 
             console.log(div);
        for(i = 0; i < input.value.length; i++) {
            index[i] = i;
        }
    
})


console.log(numbersArr);
let step = document.getElementById('triangle_right');
let bar = document.getElementsByClassName('bar');
step.addEventListener('click', function(){
    
    let parent = document.getElementsByClassName('parent')[0];
    for(i = 0; i < input.value.length - 1; i++){
        for(j = 0; j < input.value.length - 1 - i; j++){
            if(numbersArr[j] > numbersArr[j+1]) {
                let b = numbersArr[j + 1];
                numbersArr[j + 1] = numbersArr[j];
                numbersArr[j] = b;
                let c = bar[index[j]].style.left;
                bar[index[j]].style.left = bar[index[j+1]].style.left;
                bar[index[j+1]].style.left = c;
                let d = index[j];
                index[j] = index[j+1];
                index[j + 1] = d;
                
                break;
            }
        }
    break;
    }
    /*while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
   }
    /*let div = [];
    for(i = 0; i < input.value.length; i++){
        div[i] = document.createElement('div');
        parent.appendChild(div[i]);
        div[i].classList.add('bar');
        let h = numbersArr[i] * 20;
        div[i].style.height = `${h}px`;
        div[i].style.left = `${i*25}px`;
        } */
    console.log(numbersArr);
    console.log(index);
})

