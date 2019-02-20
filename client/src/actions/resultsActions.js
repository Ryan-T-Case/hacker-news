import axios from 'axios';

export const fetchResults = (query) => {
    return (dispatch) => {
        //make async call to API
        return axios.get("http://hn.algolia.com/api/v1/search?query=" + query).then((response) => {
            console.log(response);
            const results = response.data.hits
            dispatch({ type: 'FETCH_RESULTS', results });
        }).catch((err) => {
            dispatch({ type: 'FETCH_RESULTS_ERROR', err });
        })
    }
};