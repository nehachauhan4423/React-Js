import { app } from "../../firebase"
import { addDoc, collection, deleteDoc, doc, getDoc, getFirestore } from "firebase/firestore";

const db = getFirestore(app)
export const viewUser = () => {
    return async (dispatch) => {
        try {
            const data = collection(db, "users")
            const userList = await getDoc(data)
            const record = userList.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            }))
            dispatch({
                try: "viewuser",
                payload: record
            })
        } catch (error) {
            dispatch({
                type: "viewuser",
                payload: error
            })
        }
    }
}


export const addUser = (user) => {
    return async (dispatch) => {
        try {
            let addrecord = await addDoc(collection(db, "users"), {
                name: user.name
            })
            dispatch({
                type: "addrecord",
            })
        }
        catch (err) {
            console.log(err);
            return false
        }
    }
}


export const deleteUser = (id) => {
    return async (dispatch) => {
        try {
            let deleteData = await doc(db, "users", id)
            await deleteDoc(deleteData)
            dispatch({
                type: "deleteuser",
                payload: id
            })
        } catch (error) {
            console.log(err);
            return false
        }
    }
}