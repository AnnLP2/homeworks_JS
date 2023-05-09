'use strict';

const createTable = () => {

    const table = document.createElement('table');

    for (let i = 1; i <= 10; i++) {
        const row = document.createElement('tr');
        for (let j = 1; j <= 10; j++) {
            const cell = document.createElement('td');
            const num = (i - 1) * 10 + j;
            cell.textContent = num.toString();
            row.appendChild(cell);
        }
        table.appendChild(row);
    }
    document.body.appendChild(table);
}

createTable();


