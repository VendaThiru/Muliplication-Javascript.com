function generateTable() {
    const number = document.getElementById("numberInput").value;
    const tableContainer = document.getElementById("tableContainer");
  
    if (number === "") {
      alert("Please enter a number.");
      return;
    }
  
    let tableHTML = `<table>
      <tr>
        <th>Multiplier</th>
        <th>Result</th>
      </tr>`;
  
    for (let i = 1; i <= 10; i++) {
      tableHTML += `
        <tr>
          <td>${number} x ${i}</td>
          <td>${number * i}</td>
        </tr>`;
    }
  
    tableHTML += `</table>`;
    tableContainer.innerHTML = tableHTML;
  }
  