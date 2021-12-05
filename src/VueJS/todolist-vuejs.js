new Vue({
    el: '#app',
    data: {
      todos: [],
      userInput: '',
      hasError: false
    },
    methods: {
      // Detect if user presses 'enter' key
      keymonitor: function(event) {
        if (event.key == "Enter") {
          this.addTodo();
        } else if (this.hasError && event.key != "Enter") {
          this.hasError = false;  // Removes error class if user tried to add wrong input to list previously
        }
      },

      // Adds a new to-do to the list
      addTodo: function() {
        // Check if input empty or duplicate entry
        var in_array = this.todos.find(o => o.value === this.userInput);
        if (this.userInput == '' || typeof in_array != 'undefined') {
          this.hasError = true;  // Error class to add styles
          return;
        }

        var newTodo = {
          id: _.uniqueId(),
          value: this.userInput
        };
        this.todos.push(newTodo);

        this.userInput = '';  // Clears input
      },

      // Removes an existing to-do from the list
      removeTodo(todo) {
        var id = todo.id;
        for (var i = 0; i < this.todos.length; i++) {
          if (this.todos[i].id == id) {
            this.todos.splice(i, 1);
            break;
          }
        }
      }
    }
});
