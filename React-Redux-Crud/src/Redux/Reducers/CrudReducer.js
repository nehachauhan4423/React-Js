let initialState = {
    users : [
        {id: 1,name : 'john', phone :785452},
        {id: 2,name : 'bob', phone :985623},
        {id: 3,name : 'nidhi', phone :2134546},
        {id: 4,name : 'jayesh', phone :5646894},
        {id: 5,name : 'ravi', phone :3245678}
    ]
}

const crudReduce = (state = initialState,action) => {
    switch(action.type){
        default :
        return state;
    }
}

export default crudReduce