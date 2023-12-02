import React, { useState } from 'react';

interface Todo {
  id: string;
  title: string;
  completed: boolean;
}

export default function App(): JSX.Element {
  const [newItem, setNewItem] = useState<string>('');
  const [todos, setTodos] = useState<Todo[]>([]);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>): void {
    e.preventDefault();

    setTodos((current) => {
      return [
        ...current,
        {
          id: crypto.randomUUID(),
          title: newItem,
          completed: false,
        },
      ];
    });
    setNewItem('');
  }

  return (
    <div className='wrapper'>
      <form onSubmit={handleSubmit} className="new-item-form">
        <div className="form-row">
          <label htmlFor="item">New Item</label>
          <input
            value={newItem}
            onChange={(e) => setNewItem(e.target.value)}
            type="text"
            id="item"
          />
        </div>
        <button className="btn">add</button>
      </form>
      <h1 className="header">To do list </h1>
      <ul className="list">
        {todos.map((todo) => {
          return (
            <li key={todo.id}>
              <label htmlFor="">
                <input type="checkbox" checked={todo.completed} />
                {todo.title}
              </label>
              <button className="btn btn-delete">Delete</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
