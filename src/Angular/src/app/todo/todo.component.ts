import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
    selector: 'app-todo',
    template: `
        <li (click)="onRemoveTodo()" >
            {{ todoName }}
        </li>
    `
})
export class TodoComponent {
    @Input() todoName!: string;
    @Output() todoRemoved = new EventEmitter<string>();

    onRemoveTodo() {
        this.todoRemoved.emit(this.todoName)
    }
}