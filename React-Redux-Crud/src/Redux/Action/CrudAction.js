export const addUser = (addData) => {
    return{
        type : 'add_user',
        payload : addData
    }
}

export const deleteUser = (deleteData) => {
    return{
        type : 'delete_user',
        payload : deleteData
    }
}