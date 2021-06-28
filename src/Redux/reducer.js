const initialState = {
    todos: [],
   filteritems:"all",
  };
   const reducer = (state = initialState, { type, payload }) => {
    switch (type) {
      case "ADD_TODO":
        return { ...state, todos: [...state.todos, payload] };
  
        case "DELETE_TODO":
          return {...state,todos: state.todos.filter(el => el.id !== payload)};
    
      case "EDIT_TODO":
        return {...state,todos: state.todos.map(el => el.id === payload.id ? {...el ,description : payload.description} : el)};
  
      
      case "ISCOMPLETED":
        return {...state,todos: state.todos.map(el => el.id === payload ? { ...el, isDone : !el.isDone } : el  )};
        
        case "FILTER":
          return {...state,filteritems: payload};
          
    
          
        
      default:
        return state;
    }
  };
  export default reducer;