import { Todo, TodoList } from './classes';
import { crearTodoHtml } from './js/components';
import './styles.css';

export const todoList = new TodoList();
// todoList.todo.forEach(todo => crearTodoHtml(todo));
todoList.todo.forEach(crearTodoHtml);

todoList.todo[0].imprimirClase();