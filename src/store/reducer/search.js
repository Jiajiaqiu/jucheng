const defaultState = {
    objSearch:{},
    obj:{}
}
export default (state = defaultState, action) => {
    // console.log('SHOW_LIST_ACTION_FULFILLED', action)
    switch (action.type) {
        case 'SEARCH_ACTION_FULFILLED':
        let searchState = JSON.parse(JSON.stringify(state))
            searchState.objSearch = action.payload.data.show_category_list
            // console.log('newState.objSearch',newState.objSearch)
            return searchState
        case 'SHOW_LIST_ACTION_FULFILLED':
            let showListState = JSON.parse(JSON.stringify(state))
            showListState.obj = action.payload.data.list
            // console.log('showListState.obj ', showListState.obj )
            return showListState
    }
    return state;
}