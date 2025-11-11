// Day 08 - Budget Tracker
// Learning: Arrays + Loops

// Expenses array - stores all expense objects
const expenses = [
    { id: 1, description: 'Groceries', amount: 85.50, category: 'Food' },
    { id: 2, description: 'Gas', amount: 45.00, category: 'Transportation' },
    { id: 3, description: 'Netflix', amount: 15.99, category: 'Entertainment' },
    { id: 4, description: 'Gym Membership', amount: 50.00, category: 'Health' }
];

// Income array - stores all income objects
const income = [
    { id: 1, description: 'Salary', amount: 3500.00, category: 'Work' },
    { id: 2, description: 'Freelance Project', amount: 500.00, category: 'Side Hustle' },
    { id: 3, description: 'Investment Returns', amount: 150.00, category: 'Investments' }
];

// Function to display expenses using loops
function displayExpenses() {
    const expenseList = document.getElementById('expense-list');
    expenseList.innerHTML = ''; // Clear existing content
    
    // Get selected filter
    const filterValue = document.getElementById('expense-filter').value;
    
    // Loop through expenses array and filter
    let displayedCount = 0;
    for (let i = 0; i < expenses.length; i++) {
        const expense = expenses[i];
        
        // Check if expense matches filter
        if (filterValue === 'all' || expense.category === filterValue) {
            // Create expense item HTML
            const expenseItem = document.createElement('div');
            expenseItem.className = 'transaction-item expense-item';
            expenseItem.innerHTML = `
                <div class="transaction-info">
                    <strong>${expense.description}</strong>
                    <span class="category">${expense.category}</span>
                </div>
                <div class="transaction-right">
                    <span class="transaction-amount">-$${expense.amount.toFixed(2)}</span>
                    <button onclick="deleteExpense(${i})" class="delete-btn">🗑️</button>
                </div>
            `;
            
            expenseList.appendChild(expenseItem);
            displayedCount++;
        }
    }
    
    // Show message if no expenses match filter
    if (displayedCount === 0) {
        expenseList.innerHTML = '<p class="empty-message">No expenses to display</p>';
    }
    
    console.log(`Displayed ${displayedCount} of ${expenses.length} expenses`);
}

// Function to display income using loops
function displayIncome() {
    const incomeList = document.getElementById('income-list');
    incomeList.innerHTML = ''; // Clear existing content
    
    // Loop through income array
    for (let i = 0; i < income.length; i++) {
        const incomeItem = income[i];
        
        // Create income item HTML
        const incomeElement = document.createElement('div');
        incomeElement.className = 'transaction-item income-item';
        incomeElement.innerHTML = `
            <div class="transaction-info">
                <strong>${incomeItem.description}</strong>
                <span class="category">${incomeItem.category}</span>
            </div>
            <div class="transaction-right">
                <span class="transaction-amount">+$${incomeItem.amount.toFixed(2)}</span>
                <button onclick="deleteIncome(${i})" class="delete-btn">🗑️</button>
            </div>
        `;
        
        incomeList.appendChild(incomeElement);
    }
    
    // Show message if no income
    if (income.length === 0) {
        incomeList.innerHTML = '<p class="empty-message">No income to display</p>';
    }
    
    console.log(`Displayed ${income.length} income items`);
}