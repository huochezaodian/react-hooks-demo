export const initState = {
    count: 0
};

export default (state = initState, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return {
                ...state,
                count: action.count
            };
        case 'DECREMENT':
            return {
                ...state,
                count: action.count
            };
        case 'CHANGE':
            return {
                ...state,
                count: action.count
            };
        default:
            return state;
    }
};