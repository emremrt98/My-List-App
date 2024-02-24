export const inputReducer = (state, action) => {
    return {
        ...state,
        [action.type]: action.value
    };
};