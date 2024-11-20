export const add = (data) => {
    return {
        type : 'adddata',
        payload : data
    }
}

export const delet =(id) =>{
    return {
        type : 'delete', 
        payload : id

    }
}

