const defaultState = {
    objList: {},
    objTheatre: {},
    objActions: {},
    objListTour: {},
    objShow: [],
    arr: [],
    brr: [],
    objItem: {},
    objClassify: {},
    crr: [],
    drr: [],
    objBottom: {}
}
export default (state = defaultState, action) => {
    switch (action.type) {
        case 'ITEM_ACTION_FULFILLED':
            let classifyState = JSON.parse(JSON.stringify(state))
            classifyState.objItem = action.payload.data.classify_list
            classifyState.objClassify = action.payload.data.operation_list
            classifyState.objBottom = action.payload.data.bottom_slide_list
            // classifyState.drr.push(classifyState.objClassify.slice(0,2))
            // classifyState.crr.push(classifyState.objClassify.slice(2))
            // console.log('classifyState.objItem', classifyState.objBottom)
            return classifyState

        case "RECOMMEND_ACTION_FULFILLED":

            let listState = JSON.parse(JSON.stringify(state))
            listState.objList = action.payload.data.recommend_show_list
            // console.log('listState',listState)
            return listState

        case 'THEATRE_ACTION_FULFILLED':
            let theatreState = JSON.parse(JSON.stringify(state))
            // console.log(11)
            theatreState.objTheatre = action.payload.data.theatre_list
            // console.log('objTheatre', theatreState.objTheatre)
            return theatreState
        case 'MOVIES_ACTION_FULFILLED':
            let actionState = JSON.parse(JSON.stringify(state))
            actionState.objActions = action.payload.data.hots_show_list
            return actionState
        case 'LIST_ACTION_FULFILLED':
            let listTourState = JSON.parse(JSON.stringify(state))
            listTourState.objListTour = action.payload.data.tour_show_list
            // console.log('listTourState.objListTour', listTourState.objListTour)
            return listTourState
        case 'SHOW_ACTION_FULFILLED':
            let showActionState = JSON.parse(JSON.stringify(state))
            showActionState.objShow = action.payload.data
            showActionState.objShow.map((item, index) => {
                showActionState.arr.push(item.list[0])
                showActionState.brr.push(item.list.slice(1))
                // showActionState.brr = 
                // console.log('aaa', showActionState.brr)
            })
            // console.log(111111, showActionState.objShow)
            return showActionState

        
    }
    return state;
}