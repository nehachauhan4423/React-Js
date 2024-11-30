import { addDoc, collection, deleteDoc, doc, getDocs, getFirestore } from "firebase/firestore";
import { app } from "../../../firebase";
const db = getFirestore(app)

export const addTodo = (todo) => {
    return async (dispatch) => {
        try {
            await addDoc(collection(db, 'Todos'), {
                list: todo.list
            })
            dispatch({
                type: 'ADD_TODO',
                payload: todo
            })
        }
        catch (error) {
            console.log(error)
            return false;
        }
    }

}

export const ViewTodo = () => {
    return async (dispatch) => {
        try {
            let list = collection(db, 'Todos');
            let gettodos = await getDocs(list)
            const todoArray = gettodos.docs.map(val => ({
                id: val.id,
                ...val.data()
            }))
            dispatch({
                type: 'VIEW_TODO',
                payload: todoArray
            })
        } catch (error) {
            console.log(error)
            return false
        }
    }
}
