
//selectors
export const getAllTables = (state) => state.tables;
export const getTableById = ({ tables }, tableId) => tables.find(table => table.id === tableId);
export const getStatus = (state) => state.status;

// actions
const createActionName = actionName => `app/posts/${actionName}`;
const DATA_TABLES = createActionName('DATA_TABLES');
const UPDATE_TABLE = createActionName('UPDATE_TABLE');

// actions creators
export const updateTableForm = payload => ({type: UPDATE_TABLE, payload});

export const dataTables = payload => ({type: DATA_TABLES, payload});

export const fetchTables = () => {
    return(dispatch) => {
        fetch( 'http://localhost:3131/tables')

        .then(res => res.json())
        .then(tables => dispatch(dataTables(tables)))
    }
}


export const requestUpdateTableForm = (updatedTable) =>{

  const options = {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(updatedTable),
  };

  return(dispatch) => {
  fetch(`http://localhost:3131/tables/${updatedTable.id}`, options)
    .then(() => dispatch(updateTableForm(updatedTable)));
  }
};


const tablesReducer = (statePart = [], action) => {

    switch (action.type) {

      case DATA_TABLES:
        return [...action.payload];
      
      case UPDATE_TABLE:
        return statePart.map(table => (table.id === action.payload.id ? { ...table, ...action.payload } : table));

      default:
        return statePart
    };
};
  
export default tablesReducer

