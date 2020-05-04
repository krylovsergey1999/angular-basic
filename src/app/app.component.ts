import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {delay} from 'rxjs/operators';
import {TodosService} from './service/todos.service';


export interface Todo {
  completed: boolean,
  title: string,
  id?: number
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  todos: Todo[] = [];

  todoTitle: string = '';

  loading: boolean = false;

  error: string = '';

  constructor(private service: TodosService) {
  }

  ngOnInit(): void {
    this.fetchTodos();
  }

  addTodo() {
    if (!this.todoTitle.trim()) {
      return;
    }

    this.service.addTodo({
      title: this.todoTitle,
      completed: false
    }).subscribe(todo => {
      this.todos.push(todo);
      this.todoTitle = '';
    });
  }

  fetchTodos() {
    this.loading = true;
    this.service.fetchTodos()
      .subscribe(
        todos => {
          this.todos = todos;
          this.loading = false;
        },
        error => {
          console.log(error);
          this.error = error;
        }
      );
  }

  removeTodo(id: number) {
    this.service.removeTodo(id)
      .subscribe(response => {
        console.log('Элемент удален');
        this.todos = this.todos.filter(t => t.id !== id);
      });
  }

  completeTodo(id: number) {
    this.service.completeTodo(id)
      .subscribe(todo => {
        console.log(todo);
        this.todos.find(el => el.id === todo.id).completed = true;
      });
  }
}

