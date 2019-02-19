const initState = {
    searches: [{id: '1', terms: 'JavaScript'},
    {id: '2', terms: 'Apple'},
    {id: '3', terms: 'Amazon'}]
}

const rootReducer = (state = initState, action) => {
    return state;
}

export default rootReducer;