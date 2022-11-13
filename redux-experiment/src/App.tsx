import React from 'react';
import './App.css';
import {useSelector} from "react-redux";
import {ITodo} from "./reducer";

function App() {

    const state = useSelector<any, any>((state) => state.todo)
    console.log(state)
    const Items: JSX.Element = (state.todos.length > 0  ) ? state.todos.map((todo: ITodo, key: number) => (
        <div key={key}>
            <h1>{todo.title}</h1>
            <p>{todo.isCompleted}</p>
        </div>
    )) : <p> NO TODOS</p>

    return (
        <div className="App">
            <div>
                {Items}
            </div>

        </div>
    );
}

export default App;
