const initState = {
    searches: []
}

const rootReducer = (state = initState, action) => {
    if (action.type === 'CREATE_SEARCH') {
        return {
            ...state,
            searches: [state.searches.terms]
        }
    }
    return state;
}

export default rootReducer;