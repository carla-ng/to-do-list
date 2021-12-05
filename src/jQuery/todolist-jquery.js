$(document).ready(function() {  
    var input_elem = $('input');
    var button_elem = $('button');
    var ul_elem = $('ul');
    var todos = [];
    
    button_elem.click(add_todo);
    
    // Detect if user presses 'enter' key
    $(document).on('keyup', function(e) {
        if (e.which == 13) {
          button_elem.click();
        } else if (input_elem.hasClass('input-error') && e.which != 13) {
          input_elem.removeClass('input-error');  // Removes error class if user tried to add wrong input to list previously
        }
    });
    
    
    // Adds a new to-do to the list
    function add_todo() {
      var userInput = input_elem.val();
      
      // Check if input empty or duplicate entry
      var in_array = todos.find(o => o.value === userInput);
      if (userInput.length == 0 || typeof in_array != 'undefined') {
        input_elem.addClass('input-error');  // Error class to add styles
        return;
      }
    
      var newTodo = { id: _.uniqueId(), value: userInput };
      todos.push(newTodo);
    
      $('<li>' + userInput + '</li>')
        .appendTo(ul_elem)
        .attr('data-id', newTodo.id)
        .click(remove_todo);
    
      input_elem.val('');  // Clears input
    }
    

    // Removes an existing to-do from the list
    function remove_todo(event) {
      var clickedLi = $(this)
      var itemId = clickedLi.attr('data-id');
      for (var i = 0; i < todos.length; i++) {
        if (todos[i].id == itemId) {
          todos.splice(i, 1);
          break;
        }
      }
      clickedLi.remove();
    }
});
