// CREATE AN ARRAY OF EMPLOYEES
let employees = [
    { id: '1', name: 'Roman Chursin', ext: '1234', email: 'romanchursin@example.com', department: 'Engineering' },
    { id: '2', name: 'Zak Ruvalcaba', ext: '5678', email: 'zakruvalcaba@example.com', department: 'Administrative' },
    { id: '3', name: 'Alex Johnson', ext: '9012', email: 'alexjohnson@example.com', department: 'Sales' },
    { id: '4', name: 'James Bond', ext: '3456', email: 'jamesbond@example.com', department: 'Marketing' },
    { id: '5', name: 'Capt America', ext: '7890', email: 'captamerica@example.com', department: 'Quality Assurance' }
  ];
  
  // CHECK TO SEE IF STORAGE OBJECT EXISTS WHEN THE PAGE LOADS
  // IF DOES, RETURN STORAGE OBJECT INTO ARRAY INSTEAD OF POPULATED ARRAY
  if (localStorage.getItem('employees')) {
    employees = JSON.parse(localStorage.getItem('employees'));
  }
  
  // GET DOM ELEMENTS
  const form = document.getElementById('empForm');
  const empTable = document.getElementById('employees');
  const empCount = document.getElementById('empCount');
  
  // BUILD THE EMPLOYEES TABLE WHEN THE PAGE LOADS
  buildGrid();
  
  // ADD EMPLOYEE
  form.addEventListener('submit', (e) => {
    // PREVENT FORM SUBMISSION
    e.preventDefault();
  
    // GET THE VALUES FROM THE TEXT BOXES
    const id = document.getElementById('id').value;
    const name = document.getElementById('name').value;
    const ext = document.getElementById('ext').value;
    const email = document.getElementById('email').value;
    const department = document.getElementById('department').value;
  
    // ADD THE NEW EMPLOYEE TO A NEW ARRAY OBJECT
    const newEmployee = { id, name, ext, email, department };
  
    // PUSH THE NEW ARRAY TO THE *EXISTING* EMPLOYEES ARRAY
    employees.push(newEmployee);
  
    // BUILD THE GRID
    buildGrid();
  
    // RESET THE FORM
    form.reset();
  
    // SET FOCUS BACK TO THE ID TEXT BOX
    document.getElementById('id').focus();
  });
  
  // DELETE EMPLOYEE
  empTable.addEventListener('click', (e) => {
    if (e.target.classList.contains('delete')) {
      // CONFIRM THE DELETE
      if (confirm('Are you sure you want to delete this employee?')) {
        // GET THE SELECTED ROWINDEX FOR THE TR (PARENTNODE.PARENTNODE)
        const rowIndex = e.target.parentNode.parentNode.rowIndex;
  
        // REMOVE EMPLOYEE FROM ARRAY
        employees.splice(rowIndex - 1, 1);
  
        // BUILD THE GRID
        buildGrid();
      }
    }
  });
  
  // BUILD THE EMPLOYEES GRID
  function buildGrid() {
    // REMOVE THE EXISTING SET OF ROWS BY REMOVING THE ENTIRE TBODY SECTION
    empTable.querySelector('tbody').remove();
  
    // REBUILD THE TBODY FROM SCRATCH
    const tbody = document.createElement('tbody');
  
    // LOOP THROUGH THE ARRAY OF EMPLOYEES
    for (let employee of employees) {
      // REBUILDING THE ROW STRUCTURE
      const row = document.createElement('tr');
      row.innerHTML = `
        <td>${employee.id}</td>
        <td>${employee.name}</td>
        <td>${employee.ext}</td>
        <td>${employee.email}</td>
        <td>${employee.department}</td>
        <td><button class="btn btn-danger btn-sm delete">Delete</button></td>
      `;
      tbody.appendChild(row);
    }
  
    // BIND THE TBODY TO THE EMPLOYEE TABLE
    empTable.appendChild(tbody);
  
    // UPDATE EMPLOYEE COUNT
    empCount.textContent = employees.length;
  
    // STORE THE ARRAY IN STORAGE
    localStorage.setItem('employees', JSON.stringify(employees));
  }