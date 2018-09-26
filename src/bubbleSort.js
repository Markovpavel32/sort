const bubbleSort = (lengthOfArray, arrayOfNumbers, arrayOfIndexes, arrayOfBars) => {
    for(i = 0; i < lengthOfArray - 1; i++){
        for(j = 0; j < lengthOfArray - 1 - i; j++){
            if(arrayOfNumbers[j] > arrayOfNumbers[j+1]) {
                let b = arrayOfNumbers[j + 1];
                arrayOfNumbers[j + 1] = arrayOfNumbers[j];
                arrayOfNumbers[j] = b;
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
}

export default bubbleSort;