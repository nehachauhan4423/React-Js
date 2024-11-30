let initialState ={
    TodoList : [],
        err :null
}
const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case "addTodo" :
            return {
                ...state,
                TodoList : [...state.TodoList, action.payload],
                err : null
            }
         case 'ViewTodo' :
            return {
                ...state,
                TodoList : action.payload,
                err : null
            }
            case 'DeleteTodo' :
                return {
                    ...state,
                    TodoList : state.TodoList.filter((todo) => todo.id !== action.payload),
                    err : null
                }
        default :
        return state;
    }
}
export default todoReducer;