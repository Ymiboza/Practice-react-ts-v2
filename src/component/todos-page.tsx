import React, { FC, useEffect, useState } from "react";
import axios from "axios";
import List from "./list/list";
import TodoItem from "./todo-item/todo-item";
import { ITodo } from "../types/types";

const TodosPage: FC = () => {
  const [todos, setTodos] = useState<ITodo[]>([]);

  useEffect(() => {
    fetchTodos();
  }, []);

  async function fetchTodos() {
    try {
      const responce = await axios.get<ITodo[]>(
        "https://jsonplaceholder.typicode.com/todos?_limit=10"
      );
      setTodos(responce.data);
    } catch (error) {
      alert(error);
    }
  }
  return (
    <List
      items={todos}
      renderItem={(todo: ITodo) => <TodoItem todo={todo} key={todo.id} />}
    />
  );
};

export default TodosPage;
