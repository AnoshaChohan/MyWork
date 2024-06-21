function fibonacciGenerator(n) {
    // Do NOT change any of the code above 👆
    
    // Write your code here:
    
    let myArray = [];
    if (n >= 1) myArray[0] = 0;
    if (n >= 2) myArray[1] = 1;

    for (var i = 2; i < n; i++) {
        myArray[i] = myArray[i - 1] + myArray[i - 2];
    }
    
    console.log(myArray);
    return myArray;
    // Do NOT change any of the code below 👇
}

fibonacciGenerator(5); // Output: [0, 1, 1, 2, 3]
