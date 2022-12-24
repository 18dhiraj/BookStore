const initialstate = {

    books: []
}

const allbooks = (state = initialstate, action) => {

    switch (action.type) {
        case "ALL_BOOKS":

            return {
                ...state, books: action.payload
            }

        default: return state;
    }
}

export default allbooks
