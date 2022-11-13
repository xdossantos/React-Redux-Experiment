import {ITodo} from "../reducer";
import {TodoActions} from "./actionTypes";

const AddTodo = (todoItem : ITodo) => ({
    type: TodoActions.ADD,
    payload: todoItem
})

const RemoveTodo = (id : string) => ({
    type: TodoActions.REMOVE,
    payload: id
})
