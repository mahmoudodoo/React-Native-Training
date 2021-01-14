export const ADD_NOTE = 'ADD_NOTE'
export const DELETE_NOTE = 'DELETE_NOTE'


//Action
export const  addnote= note =>{
    return {
        type: ADD_NOTE,
        id:(((1+Math.random())*0x10000)|0).toString(16).substring(1),
        note
    }
}

export const deletenote = id => {
    return {
        type: DELETE_NOTE,
        payload: id
    }
}
