export const add = (data) => {
    return {
        type : 'adddata',
        payload : data
    }
}

export const deleteusers =(id) =>{
    return {
        type : 'deletedata', 
        payload : id

    }
}

