import React from 'react';
import './App.css';
import {useSelector} from "react-redux";
import {ITodo} from "./reducer";

function App() {
    const todos = useSelector<any, Array<ITodo>>((state) => state.todos)
    console.log(todos)
    // @ts-ignore
    const Items: JSX.Element = (todos != undefined) ? todos.map((todo: ITodo, key: number) => {
        <div key={key}>
            <h1>{todo.title}</h1>
            <p>{todo.isCompleted}</p>
        </div>
    }) : <p> NO TODOS</p>

    return (
        <div className="App">
            <div>
                {Items}
            </div>

        </div>
    );
}

export default App;
