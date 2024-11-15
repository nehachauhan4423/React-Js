let initialState = {
    uesers: [
        { id: 1, name: 'nidhi', phone: 21234 },
        { id: 2, name: 'khushi', phone: 85248 },
        { id: 3, name: 'john', phone: 21234 },
    ]
}

const crudReducer = () => {
    switch (action.type) {
        case 'ADD_USER':
            return { ...state, users: [...state.users, action.payload] }
        
        default:
            return state;
    }
}
export default crudReducer