function sum_to_n_a(n: number): number {
    // Sets the variable to be used in the function
    let result: number = 0;

    // Loops based on the value of n
    for (let x = 0; x < n; x++) {
        // For each loop, add the incrementing variable by 1 and add it to the current value of result
        result += (x + 1);
    }

    return result;
}

function sum_to_n_b(n: number): number {
    // Sets the variables to be used in the function
    let numbers: number[] = [];
    let x: number = 0;
    
    // Using while loop where in if x + 1 is less than or equal to n, the process of pushing the numbers into an will continue
    while ((x + 1) <= n) {
        numbers.push(x + 1);
        x++;
    }

    // Starts with 0 as the initial sum 
    // Adds like the following: 
    // 0 + 1 = 1
    // 1 + 2 = 3
    // 3 + 3 = 6
    // 6 + 4 = 10
    // 10 + 5 = 15
    return numbers.reduce((a, b) => a + b, 0);
}

function sum_to_n_c(n: number): number {
    if (n <= 0)
        return 0; // Ends the recursion once n is at 0
    
    // Adds n to the return of the recursive less 1 of n
    return n + sum_to_n_c(n - 1);
}