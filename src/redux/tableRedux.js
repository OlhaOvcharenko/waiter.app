
// actions
const createActionName = actionName => `app/posts/${actionName}`;
const UPDATE_TABLES = createActionName('UPDATE_TABLES');


// actions creators

export const updateTables = payload => ({type: UPDATE_TABLES, payload});
export const fetchTables = () => {
    return() => {
        fetch( 'http://localhost:3131/tables')

        .then(res => res.json())
        .then(tables => dispatch(updateTables(tables)))
    }
}


const tablesReducer = () => {

    switch (action.type) {

      case UPDATE_TABLES:
        return [...action, payload];
    
      default:
        return statePart
    };
};
  
export default tablesReducer

