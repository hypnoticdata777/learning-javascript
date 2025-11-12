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