const definitionReducer = (state = [], action) => {
    switch (action.type) {
        case 'ADD_DEFINITION': 
            return state.concat(action.data)
        default: 
            return state
    }
}

export default definitionReducer