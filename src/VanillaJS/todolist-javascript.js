window.onload = function() {
    var input_elem = document.querySelector('input');
    var button_elem = document.querySelector('button');
    var ul_elem = document.querySelector('ul');
    var todos = [];

    button_elem.addEventListener('click', addTodo);

    // Detect if user presses 'enter' key
    document.addEventListener('keyup', function(e) {
        if (e.keyCode === 13) {
          button_elem.click();
        } else if (input_elem.classList.contains('input-error') && e.keyCode != 13) {
          input_elem.classList.remove('input-error');  // Removes error class if user tried to add wrong input to list previously
        }
    });


    // Adds a new to-do to the list
    function addTodo() {
      var userInput = input_elem.value;

      // Check if input empty or duplicate entry
      var in_array = todos.find(o => o.value === userInput);
      if (input_elem.value == '' || typeof in_array != 'undefined') {
        input_elem.classList.add('input-error');  // Error class to add styles
        return;
      }

      var newTodo = { id: _.uniqueId(), value: userInput };
      todos.push(newTodo);

      var todo_li = document.createElement('li');
      todo_li.textContent = userInput;
      todo_li.addEventListener('click', removeTodo);
      todo_li.dataset.id = newTodo.id;
      ul_elem.appendChild(todo_li);

      input_elem.value = '';  // Clears input
    }


    // Removes an existing to-do from the list
    function removeTodo(event) {
      var clicked_li = event.target;
      var itemId = clicked_li.dataset.id;
      for (var i = 0; i < todos.length; i++) {
        if (todos[i].id == itemId) {
          todos.splice(i, 1);
          break;
        }
      }
      clicked_li.parentNode.removeChild(clicked_li);
    }
  }
