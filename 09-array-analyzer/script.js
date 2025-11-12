// Sample transaction data
const sampleTransactions = [
    { id: 1, product: 'Laptop Pro', amount: 1299, category: 'Electronics', date: '2024-01-15' },
    { id: 2, product: 'Coffee Maker', amount: 79, category: 'Appliances', date: '2024-01-16' },
    { id: 3, product: 'Wireless Mouse', amount: 25, category: 'Electronics', date: '2024-01-17' },
    { id: 4, product: 'Running Shoes', amount: 120, category: 'Clothing', date: '2024-01-18' },
    { id: 5, product: 'Blender', amount: 89, category: 'Appliances', date: '2024-01-19' },
    { id: 6, product: 'Smartphone', amount: 899, category: 'Electronics', date: '2024-01-20' },
    { id: 7, product: 'Winter Jacket', amount: 150, category: 'Clothing', date: '2024-01-21' },
    { id: 8, product: 'Organic Coffee', amount: 15, category: 'Food', date: '2024-01-22' },
    { id: 9, product: '4K Monitor', amount: 450, category: 'Electronics', date: '2024-01-23' },
    { id: 10, product: 'Air Fryer', amount: 130, category: 'Appliances', date: '2024-01-24' },
    { id: 11, product: 'Headphones', amount: 199, category: 'Electronics', date: '2024-01-25' },
    { id: 12, product: 'Dress Shirt', amount: 65, category: 'Clothing', date: '2024-01-26' }
];

// Main data array
let transactions = [];

// Initialize app
document.addEventListener('DOMContentLoaded', () => {
    setupEventListeners();
});

function setupEventListeners() {
    document.getElementById('loadData').addEventListener('click', loadSampleData);
    document.getElementById('clearData').addEventListener('click', clearAllData);
    document.getElementById('applyFilters').addEventListener('click', applyFilters);
    document.getElementById('mapNames').addEventListener('click', extractNames);
    document.getElementById('mapWithTax').addEventListener('click', addTaxToAmounts);
    document.getElementById('mapDates').addEventListener('click', formatDates);
    document.getElementById('calculateStats').addEventListener('click', calculateStatistics);
    document.getElementById('electronicsTotal').addEventListener('click', calculateElectronicsTotal);
    document.getElementById('highValueAvg').addEventListener('click', calculateHighValueAverage);
    document.getElementById('topCategories').addEventListener('click', showTopCategories);
}

function loadSampleData() {
    transactions = [...sampleTransactions];
    displayData();
    showMessage('Sample data loaded! Ready to analyze.', 'success');
}

function clearAllData() {
    transactions = [];
    displayData();
    clearAllResults();
    resetStats();
    showMessage('All data cleared!', 'info');
}

function displayData() {
    const container = document.getElementById('dataDisplay');
    
    if (transactions.length === 0) {
        container.innerHTML = '<p style="text-align: center; color: #999;">No data available. Load sample data to begin.</p>';
        return;
    }

    const table = `
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Product</th>
                    <th>Amount</th>
                    <th>Category</th>
                    <th>Date</th>
                </tr>
            </thead>
            <tbody>
                ${transactions.map(t => `
                    <tr>
                        <td>${t.id}</td>
                        <td>${t.product}</td>
                        <td>$${t.amount}</td>
                        <td>${t.category}</td>
                        <td>${t.date}</td>
                    </tr>
                `).join('')}
            </tbody>
        </table>
    `;
    
    container.innerHTML = table;
}
// FILTER OPERATIONS
function applyFilters() {
    if (transactions.length === 0) {
        showMessage('No data to filter! Load sample data first.', 'error');
        return;
    }

    const category = document.getElementById('categoryFilter').value;
    const minAmount = parseFloat(document.getElementById('minAmount').value) || 0;
    const maxAmount = parseFloat(document.getElementById('maxAmount').value) || Infinity;

    // Using filter() method
    let filtered = transactions.filter(transaction => {
        const matchesCategory = category === 'all' || transaction.category === category;
        const matchesAmount = transaction.amount >= minAmount && transaction.amount <= maxAmount;
        return matchesCategory && matchesAmount;
    });

    displayFilterResults(filtered);
    
    console.log('Filter operation:', {
        original: transactions.length,
        filtered: filtered.length,
        criteria: { category, minAmount, maxAmount }
    });
}

function displayFilterResults(filtered) {
    const container = document.getElementById('filterResults');
    
    if (filtered.length === 0) {
        container.innerHTML = '<p style="color: #999;">No transactions match your filters.</p>';
        return;
    }

    const html = `
        <h4>Found ${filtered.length} transaction(s):</h4>
        <ul style="list-style: none; padding: 0;">
            ${filtered.map(t => `
                <li style="padding: 8px; border-bottom: 1px solid #ddd;">
                    <strong>${t.product}</strong> - $${t.amount} (${t.category})
                </li>
            `).join('')}
        </ul>
    `;
    
    container.innerHTML = html;
}
// MAP OPERATIONS
function extractNames() {
    if (transactions.length === 0) {
        showMessage('No data to map! Load sample data first.', 'error');
        return;
    }

    // Using map() to extract just product names
    const productNames = transactions.map(transaction => transaction.product);

    const container = document.getElementById('mapResults');
    container.innerHTML = `
        <h4>Extracted Product Names (${productNames.length}):</h4>
        <div style="display: flex; flex-wrap: wrap; gap: 10px;">
            ${productNames.map(name => `
                <span style="background: #667eea; color: white; padding: 6px 12px; border-radius: 20px; font-size: 14px;">
                    ${name}
                </span>
            `).join('')}
        </div>
    `;

    console.log('Map operation - Product names:', productNames);
}

function addTaxToAmounts() {
    if (transactions.length === 0) {
        showMessage('No data to map! Load sample data first.', 'error');
        return;
    }

    // Using map() to transform amounts by adding 10% tax
    const withTax = transactions.map(transaction => ({
        ...transaction,
        originalAmount: transaction.amount,
        amountWithTax: (transaction.amount * 1.10).toFixed(2),
        tax: (transaction.amount * 0.10).toFixed(2)
    }));

    const container = document.getElementById('mapResults');
    container.innerHTML = `
        <h4>Amounts with 10% Tax:</h4>
        <ul style="list-style: none; padding: 0;">
            ${withTax.map(t => `
                <li style="padding: 8px; border-bottom: 1px solid #ddd; display: flex; justify-content: space-between;">
                    <span><strong>${t.product}</strong></span>
                    <span>$${t.originalAmount} + $${t.tax} = <strong>$${t.amountWithTax}</strong></span>
                </li>
            `).join('')}
        </ul>
    `;

    console.log('Map operation - With tax:', withTax);
}

function formatDates() {
    if (transactions.length === 0) {
        showMessage('No data to map! Load sample data first.', 'error');
        return;
    }

    // Using map() to format dates
    const formattedDates = transactions.map(transaction => {
        const date = new Date(transaction.date);
        return {
            product: transaction.product,
            originalDate: transaction.date,
            formattedDate: date.toLocaleDateString('en-US', {
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric'
            })
        };
    });

    const container = document.getElementById('mapResults');
    container.innerHTML = `
        <h4>Formatted Dates:</h4>
        <ul style="list-style: none; padding: 0;">
            ${formattedDates.map(item => `
                <li style="padding: 8px; border-bottom: 1px solid #ddd;">
                    <strong>${item.product}</strong><br>
                    <small style="color: #666;">${item.originalDate} → ${item.formattedDate}</small>
                </li>
            `).join('')}
        </ul>
    `;

    console.log('Map operation - Formatted dates:', formattedDates);
}
// REDUCE OPERATIONS
function calculateStatistics() {
    if (transactions.length === 0) {
        showMessage('No data to analyze! Load sample data first.', 'error');
        return;
    }

    // Using reduce() for total sales
    const totalSales = transactions.reduce((sum, transaction) => sum + transaction.amount, 0);

    // Using reduce() for average
    const avgTransaction = totalSales / transactions.length;

    // Using reduce() for highest purchase
    const highestPurchase = transactions.reduce((max, transaction) => 
        transaction.amount > max ? transaction.amount : max, 0
    );

    // Using reduce() to count by category
    const categoryTotals = transactions.reduce((acc, transaction) => {
        if (!acc[transaction.category]) {
            acc[transaction.category] = 0;
        }
        acc[transaction.category] += transaction.amount;
        return acc;
    }, {});

    // Update UI
    document.getElementById('totalSales').textContent = `$${totalSales.toFixed(2)}`;
    document.getElementById('avgTransaction').textContent = `$${avgTransaction.toFixed(2)}`;
    document.getElementById('transactionCount').textContent = transactions.length;
    document.getElementById('highestPurchase').textContent = `$${highestPurchase.toFixed(2)}`;

    displayCategoryBreakdown(categoryTotals);

    console.log('Reduce operations:', {
        totalSales,
        avgTransaction,
        highestPurchase,
        categoryTotals
    });
}

function displayCategoryBreakdown(categoryTotals) {
    const container = document.getElementById('categoryBreakdown');
    
    const html = `
        <h4>Sales by Category:</h4>
        ${Object.entries(categoryTotals).map(([category, total]) => `
            <div class="category-item">
                <span><strong>${category}</strong></span>
                <span>$${total.toFixed(2)}</span>
            </div>
        `).join('')}
    `;
    
    container.innerHTML = html;
}
// COMBINED OPERATIONS (Chaining methods)
function calculateElectronicsTotal() {
    if (transactions.length === 0) {
        showMessage('No data to analyze! Load sample data first.', 'error');
        return;
    }

    // Filter electronics, then reduce to get total
    const electronicsTotal = transactions
        .filter(t => t.category === 'Electronics')
        .reduce((sum, t) => sum + t.amount, 0);

    const electronicsCount = transactions.filter(t => t.category === 'Electronics').length;

    const container = document.getElementById('combinedResults');
    container.innerHTML = `
        <div style="padding: 15px; background: #4CAF50; color: white; border-radius: 8px;">
            <h4>Electronics Sales Analysis</h4>
            <p style="font-size: 24px; margin: 10px 0;"><strong>$${electronicsTotal.toFixed(2)}</strong></p>
            <p>From ${electronicsCount} transaction(s)</p>
        </div>
    `;

    console.log('Combined operation - Electronics total:', { electronicsTotal, electronicsCount });
}

function calculateHighValueAverage() {
    if (transactions.length === 0) {
        showMessage('No data to analyze! Load sample data first.', 'error');
        return;
    }

    // Filter high-value transactions (>$500), then calculate average
    const highValueTransactions = transactions.filter(t => t.amount > 500);
    
    if (highValueTransactions.length === 0) {
        const container = document.getElementById('combinedResults');
        container.innerHTML = '<p style="color: #999;">No transactions over $500 found.</p>';
        return;
    }

    const highValueTotal = highValueTransactions.reduce((sum, t) => sum + t.amount, 0);
    const highValueAvg = highValueTotal / highValueTransactions.length;

    const container = document.getElementById('combinedResults');
    container.innerHTML = `
        <div style="padding: 15px; background: #2196F3; color: white; border-radius: 8px;">
            <h4>High-Value Transactions (>$500)</h4>
            <p style="font-size: 24px; margin: 10px 0;"><strong>$${highValueAvg.toFixed(2)}</strong></p>
            <p>Average from ${highValueTransactions.length} transaction(s)</p>
            <ul style="margin-top: 10px;">
                ${highValueTransactions.map(t => `<li>${t.product}: $${t.amount}</li>`).join('')}
            </ul>
        </div>
    `;

    console.log('Combined operation - High value average:', { highValueAvg, count: highValueTransactions.length });
}

function showTopCategories() {
    if (transactions.length === 0) {
        showMessage('No data to analyze! Load sample data first.', 'error');
        return;
    }

    // Group by category, sum totals, sort, and take top 3
    const categoryTotals = transactions.reduce((acc, t) => {
        if (!acc[t.category]) {
            acc[t.category] = { total: 0, count: 0 };
        }
        acc[t.category].total += t.amount;
        acc[t.category].count += 1;
        return acc;
    }, {});

    const topCategories = Object.entries(categoryTotals)
        .map(([category, data]) => ({ category, ...data }))
        .sort((a, b) => b.total - a.total)
        .slice(0, 3);

    const container = document.getElementById('combinedResults');
    container.innerHTML = `
        <h4>Top 3 Categories by Sales:</h4>
        ${topCategories.map((cat, index) => `
            <div style="padding: 15px; background: ${['#FFD700', '#C0C0C0', '#CD7F32'][index]}; 
                        border-radius: 8px; margin-bottom: 10px;">
                <h4 style="margin: 0;">#${index + 1} ${cat.category}</h4>
                <p style="font-size: 20px; margin: 5px 0;"><strong>$${cat.total.toFixed(2)}</strong></p>
                <p style="margin: 0;">From ${cat.count} transaction(s)</p>
            </div>
        `).join('')}
    `;

    console.log('Combined operation - Top categories:', topCategories);
}