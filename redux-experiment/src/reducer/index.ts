import {TodoActions} from "../actions/actionTypes";

export interface ITodo {
    id: number;
    title: string;
    isCompleted: boolean;
}

const initialState: { todos: Array<ITodo> } = {
    todos: [{
        id: 1,
        title: "My Title",
        isCompleted: false,
    }]
}

export const todoReducer = (state: { todos: Array<ITodo> } = initialState, action: any) => {
    switch (action.type) {
        case TodoActions.ADD:
            return {
                ...state,
                todos: state.todos.push(action.payload)
            }
        case TodoActions.REMOVE:
            return {
                ...state,
                todos: state.todos.filter(todo => todo.id !== action.payload)
            }
        default:
            return state;

    }
}
