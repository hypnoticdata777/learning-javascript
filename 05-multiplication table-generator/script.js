function generateMultiplicationTable(number, range) {
    let tableHTML = '<table class="multiplication-table">';
    
    tableHTML += '<thead><tr>';
    tableHTML += '<th>Multiplicand</th>';
    tableHTML += '<th>×</th>';
    tableHTML += '<th>Multiplier</th>';
    tableHTML += '<th>=</th>';
    tableHTML += '<th>Result</th>';
    tableHTML += '</tr></thead>';
    
    tableHTML += '<tbody>';
    
    for (let i = 1; i <= range; i++) {
        const result = number * i;
        tableHTML += '<tr>';
        tableHTML += `<td>${number}</td>`;
        tableHTML += '<td>×</td>';
        tableHTML += `<td>${i}</td>`;
        tableHTML += '<td>=</td>';
        tableHTML += `<td class="result">${result}</td>`;
        tableHTML += '</tr>';
    }
    
    tableHTML += '</tbody>';
    tableHTML += '</table>';
    
    return tableHTML;
}

function validateInputs(number, range) {
    if (isNaN(number) || number < 1 || number > 20) {
        alert('Please enter a number between 1 and 20');
        return false;
    }
    
    if (isNaN(range) || range < 1 || range > 20) {
        alert('Please enter a range between 1 and 20');
        return false;
    }
    
    return true;
}

function displayTable() {
    const numberInput = document.getElementById('numberInput');
    const rangeInput = document.getElementById('rangeInput');
    const tableContainer = document.getElementById('tableContainer');
    
    const number = parseInt(numberInput.value);
    const range = parseInt(rangeInput.value);
    
    if (!validateInputs(number, range)) {
        return;
    }
    
    const tableHTML = generateMultiplicationTable(number, range);
    tableContainer.innerHTML = tableHTML;
}

document.getElementById('generateBtn').addEventListener('click', displayTable);

document.getElementById('numberInput').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        displayTable();
    }
});

document.getElementById('rangeInput').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        displayTable();
    }
});

displayTable();

