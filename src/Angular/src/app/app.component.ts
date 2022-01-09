import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  todos: string[] = ['Draw','Read'];
  newTodoInput = '';
  todoWasDeleted = false;

  onNewTodo() {
    this.todos.push(this.newTodoInput);
  }

  onTodoRemoved(todo: string) {
    const position = this.todos.indexOf(todo);
    this.todos.splice(position, 1);
    this.todoWasDeleted = true;
  }

}
