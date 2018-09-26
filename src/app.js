export const buble = (X) => {
    for(i = 0; i < X.length; i++){
        if(X[i] > X[i+1]) {
            let b = X[i + 1];
            X[i + 1] = X[i];
            X[i] = b;
        }
    }
    
    return X;
}

