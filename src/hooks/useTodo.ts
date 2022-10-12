import React, { useState, useEffect } from "react";
import { ulid } from "ulid";

import * as todoData from "../apis/todos";
import { TodoItem } from "../components/TodoItem";
import { Todo } from "../types/Todo";

export const useTodo = () => {
    const [todoList, setTodoList] = useState<Todo[]>([]);

useEffect(() => {
    todoData.getAllTodosData().then((todo) => {
        console.log(...todo);
        setTodoList([...todo].reverse);
    });
}, []);

const toggleTodoListItemStatus = (id: string, done: boolean) => {
    const  todoItem = todoList.find((item: Todo) => item.id === id);
    const newTodoItem: Todo = {...todoItem!, done: !done };
    todoData.updateTodoData(id, newTodoItem).then((updatedTodo) => {
        const newTodoList = todoList.map((item) => (item.id !== updatedTodo.id ? item : updatedTodo));
        setTodoList(newTodoList);
    });
};
const addTodoListItem = (todoContent: string) => {
    const newTodoItem = {id:ulid(), content: todoContent, done: false};

    todoData.addTodoData(newTodoItem).then((addTodo) => {
        setTodoList([addTodo, ...todoList]);
});
};
const deleteTodoListItem = (id: string) => {
    todoData.deleteTodoData(id).then((deletedid) =>{
        const newTodoList = todoList.filter((item) => item.id !==deletedid);
    setTodoList(newTodoList);
});
};
return { todoList, toggleTodoListItemStatus, addTodoListItem,deleteTodoListItem};
};