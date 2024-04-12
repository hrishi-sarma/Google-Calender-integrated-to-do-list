document.getElementById('task-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const taskInput = document.getElementById('task-input');
    const deadlineInput = document.getElementById('deadline-input');
  
    if (taskInput.value.trim() === '') {
      alert('Please enter a task.');
      return;
    }
  
    const task = {
      name: taskInput.value.trim(),
      deadline: deadlineInput.value
    };
  
    addTaskToList(task);
    saveTask(task);
    taskInput.value = '';
    deadlineInput.value = '';
  });
  
  function addTaskToList(task) {
    const taskList = document.getElementById('task-list');
    const li = document.createElement('li');
    li.innerHTML = `
      <span class="task-name">${task.name}</span> - 
      <span class="task-deadline">${formatDeadline(task.deadline)}</span>
    `;
    taskList.appendChild(li);
  }
  
  function saveTask(task) {
    // Implement saving task to the cloud (e.g., Firebase, localStorage)
  }
  
  function formatDeadline(deadline) {
    const date = new Date(deadline);
    return date.toLocaleString();
  }
  