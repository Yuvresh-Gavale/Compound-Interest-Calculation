// PRINCIPAL AMOUNT
let p=60000;

// RATE OF INTEREST(IN %)
let r=10;

// NUMBER OF TIMES INTEREST (COMPOUND PER YEAR)
let n=1;

// TIME (IN YEARS)
let t=4;

// COMPOUND INTEREST FORMULA
let A= p * Math.pow((1 + (r / (100 * n))), n * t);

// COMPOUND INTEREST
let CI = A - p;


// OUTPUT
console.log("Principal Amount:", p);
console.log("Rate of Interest:", r + "%");
console.log("Time:", t + " years");
console.log("Compound Amount:", A.toFixed(2));
console.log("Compound Interest:", CI.toFixed(2));