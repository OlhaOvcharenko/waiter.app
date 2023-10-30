import shortid from "shortid";


//selectors
export const getAllTables = (state) => state.tables;
export const getTableById = ({ tables }, tableId) => tables.find(table => table.id === tableId);

// actions
const createActionName = actionName => `app/tables/${actionName}`;
const DATA_TABLES = createActionName('DATA_TABLES');
const UPDATE_TABLE = createActionName('UPDATE_TABLE');
const ADD_TABLE = createActionName('ADD_TABLE')

// actions creators
export const updateTableForm = payload => ({type: UPDATE_TABLE, payload});
export const dataTables = payload => ({type: DATA_TABLES, payload});
export const addTable = payload => ({type: ADD_TABLE, payload});


export const fetchTables = () => {
  return(dispatch) => {
      fetch( 'http://localhost:3131/tables')

      .then(res => res.json())
      .then(tables => dispatch(dataTables(tables)))
  }
};

export const requestUpdateTableForm = (updatedTable, tableId) =>{
  return(dispatch) => {
  const options = {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(updatedTable),
  };

  fetch(`http://localhost:3131/tables/`+ tableId, options)
    .then(() => dispatch(updateTableForm(updatedTable)));
  }
};

export const addTableRequest = (newTable) => {

  return(dispatch) => {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newTable),
    };
  
    fetch(`http://localhost:3131/tables/`, options)
      .then(() => dispatch(addTable(newTable)));
  }
};




const tablesReducer = (statePart = [], action) => {

    switch (action.type) {

      case DATA_TABLES:
        return [...action.payload];

      case UPDATE_TABLE:
        return statePart.map(table => (table.id === action.payload.id ? { ...table, ...action.payload } : table));

      case ADD_TABLE:
        return [...statePart, { ...action.payload, id: shortid() }];
      default:
        return statePart
    };
};
  
export default tablesReducer

