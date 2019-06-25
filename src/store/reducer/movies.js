const defaultState = {
    obj: {}
}
export default (state = defaultState, action) => {
    
    switch (action.type) {
        case 'ACTION_FULFILLED':
            let newState = JSON.parse(JSON.stringify(state))
            newState.obj = action.payload.data.theatre_list
            return newState
    }
    return state;
}