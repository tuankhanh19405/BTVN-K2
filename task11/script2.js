document.addEventListener('DOMContentLoaded', () => {
  const students = [
    { id: 1, name: "Nguyễn Văn A", age: 20, city: "Hà Nội" },
    { id: 2, name: "Trần Thị B", age: 19, city: "TP.HCM" },
    { id: 3, name: "Lê Văn C", age: 21, city: "Đà Nẵng" },
  ];

  const table = document.getElementById('dataTable');

  let tableHTML = `
    <thead>
      <tr>
        <th>ID</th>
        <th>Tên</th>
        <th>Tuổi</th>
        <th>Thành phố</th>
      </tr>
    </thead>
    <tbody>
  `;

  students.forEach(student => {
    tableHTML += `
      <tr>
        <td>${student.id}</td>
        <td>${student.name}</td>
        <td>${student.age}</td>
        <td>${student.city}</td>
      </tr>
    `;
  });

  tableHTML += `</tbody>`;

  table.innerHTML = tableHTML;

  table.style.border = '1px solid black';
  table.querySelectorAll('th, td').forEach(cell => {
    cell.style.border = '1px solid black';
    cell.style.textAlign = 'center';
  });
});