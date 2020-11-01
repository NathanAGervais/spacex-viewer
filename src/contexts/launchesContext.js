import * as React from 'react';
import axios from 'axios';

const LaunchesStateContext = React.createContext();
const LaunchesDispatchContext = React.createContext();

function launchesReducer(state, action) {
  switch (action.type) {
    case 'FETCH_SUCCESS':
      return {
        ...state,
        loading: false,
        error: '',
        launches: [...action.payload],
      };
    case 'FETCH_ERROR':
      return {
        ...state,
        loading: false,
        error: 'Something went wrong',
        launches: [],
      };

    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}
const initialState = { loading: true, error: '', launches: [] };

function LaunchesProvider({ children }) {
  const [state, dispatch] = React.useReducer(launchesReducer, initialState);

  React.useEffect(() => {
    axios
      .get('https://api.spacexdata.com/v3/launches')
      .then((response) => dispatch({ type: 'FETCH_SUCCESS', payload: response.data }))
      .catch(() => dispatch({ type: 'FETCH_ERROR' }));
  }, []);

  return (
    <LaunchesStateContext.Provider value={state}>
      <LaunchesDispatchContext.Provider value={dispatch}>
        {children}
      </LaunchesDispatchContext.Provider>
    </LaunchesStateContext.Provider>
  );
}

function useLaunchesState() {
  const context = React.useContext(LaunchesStateContext);

  if (context === undefined) {
    throw new Error('useLaunchesState must be used within a LaunchesProvider');
  }

  return context;
}

function useLaunchesDispatch() {
  const context = React.useContext(LaunchesDispatchContext);

  if (context === undefined) {
    throw new Error('useLaunchesDispatch must be used within a LaunchesProvider');
  }

  return context;
}

export { LaunchesProvider, useLaunchesState, useLaunchesDispatch };
