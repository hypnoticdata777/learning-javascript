message = "Hello World"
console.log(message)
message = "Nice Weather!"
console.log(message)

// Mini Budget Tracker
// 1. Start with an array of expense objects
let expenses = [
    { description: "Groceries", amount: 520},
    { description:"Gas", amount:300},
];
//2. Function to add a new expense
function addExpense(description, amount){
    expenses.push({ description, amount });
    console.log('Added: ${description} - $${amount}');

}

// 3. Function to calculate total
function getTotal(){
    let total = 0;
    for (let item of expenses) {
        total += item.amount;
    }
    return total;
}

//4. Function to find highest and lowest expense
function getMinMax(){
    let amounts = expenses.map(e =>e.amount);
    let max = Math.max(...amounts);
    let min = Math.min(...amounts);
    return { max, min};
}

//Test Section
addExpense("Electricity" , 450);
addExpense("Coffee", 120);

console.log("All Expenses:", expenses);
console.log("Total Spent:", getTotal());
console.log("Highest and Lowest Expense:", getMinMax());

console.log("============ Summary ============");
console.log("Total Spent: $" + getTotal());
console.log("Highest Expense: $" + getMinMax().max);
console.log("Lowest Expense: $" + getMinMax().min);
console.log("=================================");



