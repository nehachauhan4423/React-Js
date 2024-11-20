let initialState = {
    users : localStorage.getItem('users') ? JSON.parse(localStorage.getItem('users')) : []
}


const notesReducer = (state = initialState, action) => {
    switch(action.type){
        case 'adddata' :
            let old = [...state.users,action.payload]
            localStorage.setItem('users',JSON.stringify(old))
        return{
            ...state,
            users: old
        } 


        case 'deletedata' :
            let deleteId = action.payload
            let remove = state.users.filter((user) => user.id !== deleteId)
            localStorage.setItem('users',JSON.stringify(remove))
            alert("NOTE DELETED")
        return{
            ...state,
            users : remove
        }
        default :
        return state

    }
}
export default notesReducer;