export const formReducer = (state = initialState, { type, payload }) => {
    return {
        ...state,
        [type]: payload
    }
}