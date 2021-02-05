 
const initialState = {
    status: null,
}; 
  
  
//reducer
export default (state = initialState, action) => {
    switch (action.type) {
      case 'SET_LOGGED_IN_STATUS':
        return {...action.state};
      default:
        return state;
    }
};
  
  